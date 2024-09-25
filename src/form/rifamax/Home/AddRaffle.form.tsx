import moment from 'moment';
import { getDate } from '@utils/time';
import { useForm } from '@mantine/form';
import { LOTERIES } from '@assets/loteries';
import { CURRENCIES } from '@assets/currencies';
import { useViewportSize } from '@mantine/hooks';
import { DatePickerInput } from '@mantine/dates';
import { IAddRaffleForm, IRaffleForm } from '@interfaces/index';
import { Button, Divider, Group, NumberInput, Select, Switch, TextInput, Grid } from '@mantine/core';
import { Icon123, IconAward, IconCalendar, IconCar, IconClock, IconCoin, IconPlus, IconTrash } from '@tabler/icons-react';

function AddRaffleForm({ onNext, onBack }: IAddRaffleForm) {
  const currentYear = Number(moment(new Date()).format('YYYY'))
  const minYear = 1995

  const { width } = useViewportSize();

  const form = useForm<IRaffleForm>({
    name: 'add-raffle-form',
    mode: 'controlled',
    initialValues: {
      title: '',
      init_date: getDate(0),
      price: 1.0,
      currency: 'USD',
      numbers: 0,
      lotery: 'Zulia 7A',
      seller_id: 0,
      prizes: [
        {
          award: '',
          plate: '',
          year: null,
          is_money: false,
          wildcard: true
        }
      ]
    },
    validate: {
      title: (value: string) => value.trim().length > 0 ? null : 'El título es obligatorio',
      init_date: (value: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);   
        
        const maxDate = getDate(21);
        maxDate.setHours(23, 59, 59, 999); 
        
        return (value >= today && value <= maxDate) 
          ? null 
          : `La fecha debe estar entre ${today.toLocaleDateString()} y ${maxDate.toLocaleDateString()}`;
      },
      numbers: (value: number) => (
        value > 0
          ? value <= 999
            ? null
            : 'Debe ser menor a 1000'
          : 'Debe ser mayor a 0'
      ),
      price: (value: number) => (value > 0 ? null : 'El precio debe ser mayor a 0'),
      seller_id: (value: number) => (value > 0 ? null : 'Debe seleccionar un rifero'),
      currency: (value: string) => value ? null : 'Debe seleccionar una moneda',
      lotery: (value: string) => value ? null : 'Debe seleccionar una lotería',
      prizes: {
        award: (value: string) => value ? null : 'Debe escoger un premio',
        plate: (value: string | null, values) => {
          const prize = values.prizes.find(p => p.plate === value);
          return (prize?.is_money || value) ? null : 'Debe ingresar una placa';
        },
        year: (value: number | null, values) => {
          const prize = values.prizes.find(p => p.year === value);
          return (prize?.is_money || value) 
            ? Number(value) > currentYear || Number(value) < minYear 
              ? `Debe ser mayor a ${minYear} y menor a ${currentYear}` 
                : null 
                  : 'Debe ingresar un año';
        }
      }
    }
  });

  const SELLERS = [
    { value: '1', label: 'Javier Diaz' },
    { value: '2', label: 'Evanan Semprun' }
  ]

  const PRIZES_JUSTIFY = form.getValues().prizes.length == 1 ? 'center' : 'space-between'
  const PRIZES_SIZE = form.getValues().prizes.length == 1 ? '100%' : 'calc(50% - 10px)'
  const FIELDS_SIZE = width > 800 ? 'md' : 'sm'

  const prizesField = form.getValues().prizes.map((_, index) => (
    <Group key={index} w={PRIZES_SIZE} mt="xs">
      <TextInput
        w='100%'
        withAsterisk
        size={FIELDS_SIZE}
        rightSection={<IconAward />}
        label={index === 0 ? "Premio con signo" : "Premio sin signo"}
        placeholder={index === 0 ? "Premio con signo" : "Premio sin signo"}
        {...form.getInputProps(`prizes.${index}.award`)}
      />

      <NumberInput
        w='100%'
        label="Modelo"
        placeholder="Modelo"
        size={FIELDS_SIZE}
        mt={-10}
        rightSection={<IconClock />}
        disabled={form.getValues().prizes[index]?.is_money}
        withAsterisk={!form.getValues().prizes[index]?.is_money}
        {...form.getInputProps(`prizes.${index}.year`)}
      />
      <TextInput
        mt={-10}
        label="Placa"
        size={FIELDS_SIZE}
        placeholder="Placa"
        rightSection={<IconCar />}
        w={`calc(100% - ${width > 800 ? '130px' : '0px'})`}
        disabled={form.getValues().prizes[index]?.is_money}
        withAsterisk={!form.getValues().prizes[index]?.is_money}
        {...form.getInputProps(`prizes.${index}.plate`)}
      />
      <Switch
        label="Dinero"
        size={FIELDS_SIZE}
        mt={width > 800 ? 10 : 0}
        checked={form.getValues().prizes[index]?.is_money}
        onChange={(e) => {
          const isMoney = e.currentTarget.checked;
          form.setFieldValue(`prizes.${index}.is_money`, isMoney);
          form.setFieldValue(`prizes.${index}.plate`, isMoney ? null : '');
          form.setFieldValue(`prizes.${index}.year`, isMoney ? null : '');
        }}
      />
    </Group>
  ));

  const PrizesManager = () => (
    <Group justify="center" mt="md">
      <Button
        color='red'
        variant='light'
        w="calc(50% - 10px)"
        leftSection={<IconTrash />}
        disabled={form.getValues().prizes.length === 1}
        onClick={() => form.removeListItem('prizes', 1)}
      >
        Eliminar premio sin signo
      </Button>
      <Button
        variant='light'
        w="calc(50% - 10px)"
        leftSection={<IconPlus />}
        disabled={form.getValues().prizes.length === 2}
        onClick={() => form.insertListItem('prizes', { award: '', plate: '', is_money: false, wildcard: false })}
      >
        Añadir premio sin signo
      </Button>
    </Group>
  )

  const handleSubmit = (values: IRaffleForm) => {
    onNext && onNext(values)
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Group justify='space-between' mb={5}>
        <TextInput
          withAsterisk
          size={FIELDS_SIZE}
          w="calc(50% - 10px)"
          label="Título de la rifa"
          placeholder="Título de la rifa"
          rightSection={<IconAward />}
          {...form.getInputProps('title')}
        />
        <DatePickerInput
          withAsterisk
          w="calc(50% - 10px)"
          minDate={getDate(0)}
          maxDate={getDate(21)}
          size={FIELDS_SIZE}
          label="Fecha de la rifa"
          placeholder="Fecha de la rifa"
          rightSection={<IconCalendar />}
          {...form.getInputProps('init_date')}
        />
      </Group>
      <PrizesManager />
      <Group justify={PRIZES_JUSTIFY}>
        {prizesField}
      </Group>
      <Divider
        size='xs'
        mt={10}
        label="Opciones de la rifa"
        labelPosition='center'
      />
      <Select
        size={FIELDS_SIZE}
        withAsterisk
        label="Moneda"
        placeholder="Ingrese una moneda"
        data={CURRENCIES}
        {...form.getInputProps('currency')}
      />

      <Grid grow mt={10}>
        <Grid.Col span={{ base: 6, md: 6, lg: 4 }}>
          <NumberInput
            type="tel"
            withAsterisk
            label="Precio"
            size={FIELDS_SIZE}
            placeholder="Precio"
            rightSection={<IconCoin />}
            {...form.getInputProps('price')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 6, lg: 4 }}>
          <NumberInput
            type="tel"
            withAsterisk
            size={FIELDS_SIZE}
            rightSection={<Icon123 />}
            label="Números"
            placeholder="Números"
            {...form.getInputProps('numbers')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
          <Select
            size={FIELDS_SIZE}
            withAsterisk
            label="Lotería"
            placeholder="Lotería"
            data={LOTERIES}
            {...form.getInputProps('lotery')}
          />
        </Grid.Col>
      </Grid>
      <Select
        mt={5}
        withAsterisk
        label="Rifero"
        data={SELLERS}
        size={FIELDS_SIZE}
        placeholder="Rifero"
        {...form.getInputProps('seller_id')}
      />
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={onBack}>Atras</Button>
        <Button type="submit" color="teal">Siguiente</Button>
      </Group>
    </form>
  );
}

export default AddRaffleForm;
