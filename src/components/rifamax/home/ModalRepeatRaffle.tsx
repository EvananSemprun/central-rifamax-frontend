import useAuth from "@/hooks/useAuth";
import WoodTitle from "@components/shared/WoodTitle";
import { useForm } from '@mantine/form';
import { modals } from "@mantine/modals";
import { DatePickerInput } from "@mantine/dates";
import { useMutation } from '@tanstack/react-query';
import { repeatToApp } from "@api/rifamax/Raffles.request";
import { IconCash, IconNumber, IconReload } from "@tabler/icons-react";
import { IAccordionSteps, IRepeatRaffleForm } from "@interfaces/index";
import { Center, Chip, Group, NumberInput, Title, Button, Select } from "@mantine/core";
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

function ModalRepeatRaffle({ raffle_id }: IAccordionSteps) {
  const { token } = useAuth();

  const mutation = useMutation({
    mutationFn: repeatToApp,
    onSuccess: () => (
      SuccessNotification({
        position: 'top',
        title: 'Rifa repetida con éxito.',
        label: 'Su rifa ha sido repetida exitosamente, revise la App de Rifamax.',
      })
    ),
    onError: () => (
      ErrorNotification({
        position: 'top',
        title: 'Ha ocurrido un error.',
        label: 'Ha ocurrido un error al repetir la rifa.',
      })
    ),
  });

  const form = useForm<IRepeatRaffleForm>({
    initialValues: {
      numbers: 1,
      lotery: 'zulia 7a',
      init_date: null,
    },
    validate: {
      numbers: (value) => value ? null : 'Ingrese un número válido',
      lotery: (value) => value.length > 0 ? null : 'Ingrese el nombre de la lotería',
      init_date: (value) => value ? null : 'Seleccione una fecha válida',
    },
  });

  const openRepeatRaffleModal = () => modals.open({
    title: <Title order={3}>Repetir rifa</Title>,
    centered: true,
    children: (
      <form onSubmit={form.onSubmit((values) => {
        mutation.mutate({
          token: token,
          raffle_id: raffle_id,
          data: values
        });
        modals.closeAll();
      })}>
        <WoodTitle title="¿Desea repetir esta rifa?" variant="dashed" />
        <DatePickerInput
          mt="md"
          mb={15}
          label="Fecha de la rifa"
          radius="sm"
          placeholder="Fecha de la rifa"
          {...form.getInputProps('init_date')}
        />
        <Group justify="center" mb={15}>
          <NumberInput
            radius="sm"
            label="Números"
            hideControls
            w="47%"
            withAsterisk
            rightSection={<IconNumber />}
            {...form.getInputProps('numbers')}
          />
          <Select
            label="Lotería"
            radius="sm"
            w="49%"
            rightSection={<IconCash />}
            data={['zulia 7a']}
            withAsterisk
            {...form.getInputProps('lotery')}
          />
        </Group>
        <Button type="submit" variant="light" fullWidth>
          Repetir
        </Button>
      </form>
    ),
  });

  return (
    <Chip variant="outline" size="sm" checked={false} color="gray" onClick={openRepeatRaffleModal}>
      <Center>
        <IconReload stroke={1.5} size="1rem" />
      </Center>
    </Chip>
  );
}

export default ModalRepeatRaffle;
