import { DNIs } from '@assets/DNIs';
import { phone } from '@assets/phone';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IAddSeller, IAddSellerForm } from '@interfaces/index';
import { IconAt, IconLock, IconPhone, IconSearch, IconUser } from '@tabler/icons-react';
import { TextInput, PasswordInput, Grid, Group, Select, Button } from '@mantine/core';
import { formatPhone } from '@/utils/parse';

function AddSellerForm({ onSubmit }: IAddSeller) {
  const [nacionality, setNacionality] = useState<string | null>('V-');
  const [prefix, setPrefix] = useState<string | null>('+58');

  const dniDetails = DNIs.venezuela;
  const phoneRegex = phone.global.regex;

  const handleSubmit = () => {
    console.log(form.values);
  };

  const form = useForm<IAddSellerForm>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      lastname: '',
      dni: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: '',
    },

    validate: {
      name: (value) =>
        value.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : null,
      lastname: (value) =>
        value.length < 2 ? 'El apellido debe tener al menos 2 caracteres' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo electrónico inválido'),
      password: (value) =>
        value.length >= 6 ? null : 'La contraseña debe tener al menos 6 caracteres',
      password_confirmation: (value, values) =>
        value === values.password ? null : 'Las contraseñas no coinciden',
      dni: (value) =>
        dniDetails.regex.test(nacionality + value) ? null : 'La cédula debe ser válida',
      phone: (value) =>
        phoneRegex.test(`${prefix} ${value}`) ? null : 'Número telefónico debe tener exactamente 10 dígitos',
    },
    onValuesChange: (values) => {
      if (values.phone) {
        const parsedPhone = formatPhone(values.phone);
      
        form.setFieldValue('phone', parsedPhone)
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            leftSection={<IconUser />}
            size="md"
            withAsterisk
            label="Nombre"
            placeholder="Nombre"
            {...form.getInputProps('name')}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            leftSection={<IconUser />}
            size="md"
            withAsterisk
            label="Apellido"
            placeholder="Apellido"
            {...form.getInputProps('lastname')}
          />
        </Grid.Col>
      </Grid>
      <TextInput
        withAsterisk
        leftSection={<IconAt />}
        mt={15}
        size="md"
        label="Correo electrónico"
        placeholder="rifero@rifamax.com"
        {...form.getInputProps('email')}
      />

      <Group grow>
        <Select
          data={DNIs.venezuela.parseAbreviatures}
          label="Nacionalidad"
          value={nacionality}
          onChange={setNacionality}
          allowDeselect={false}
          mt={15}
          size="md"
        />
        <TextInput
          leftSection={<IconSearch />}
          size="md"
          mt={15}
          withAsterisk
          label="Cédula"
          placeholder="Cédula"
          {...form.getInputProps('dni')}
        />
      </Group>

      <Group mt={15}>
        <Select
          data={phone.global.systemCountries}
          label="Prefijo"
          w={100}
          value={prefix}
          onChange={setPrefix}
          allowDeselect={false}
          size="md"
        />
        <TextInput
          leftSection={<IconPhone />}
          withAsterisk
          size="md"
          w='calc(100% - 116px)'
          label="Teléfono"
          placeholder="Ingresa tu número telefónico"
          {...form.getInputProps('phone')}
        />
      </Group>

      <Grid mt={15}>
        <Grid.Col span={6}>
          <PasswordInput
            withAsterisk
            size="md"
            leftSection={<IconLock />}
            label="Contraseña"
            placeholder="Tu contraseña"
            {...form.getInputProps('password')}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <PasswordInput
            leftSection={<IconLock />}
            withAsterisk
            label="Repetir contraseña"
            size="md"
            placeholder="Confirma tu contraseña"
            {...form.getInputProps('password_confirmation')}
          />
        </Grid.Col>
      </Grid>

      <Group justify="center" mt="xl">
        <Button variant="light" disabled>
          Anterior
        </Button>
        <Button variant="light" type="submit">
          Siguiente
        </Button>
      </Group>
    </form>
  );
};

export default AddSellerForm;