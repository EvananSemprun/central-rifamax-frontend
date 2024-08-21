import { useState } from 'react';
import { DNIs } from '@assets/DNIs';
import { useForm } from '@mantine/form';
import { IAddSellerForm } from '@interfaces/index';
import { TextInput, PasswordInput, Grid, Group, Select } from '@mantine/core';
import { IconAt, IconLock, IconPhone, IconSearch, IconUser } from '@tabler/icons-react';

const AddSeller = () => {
  const [nacionality, setNacionality] = useState<string | null>('V-')
  const dniDetails = DNIs.venezuela

  const form = useForm<IAddSellerForm>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      lastname: '',
      dni: '',
      phone: '',
      email: '',
      password: '',
      confirm_password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters long'),
      confirm_password: (value, values) => value === values.password ? null : 'Passwords do not match',
      dni: (value) => (dniDetails.regex.test(nacionality + value) ? null : 'Cédula debe ser válida'),
      phone: (value) => (/^\d+$/.test(value) ? null : 'Número telefónico invalido'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            leftSection={<IconUser />}
            size='md'
            withAsterisk
            label="Nombre"
            placeholder="Nombre"
            {...form.getInputProps('name')}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            leftSection={<IconUser />}
            size='md'
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
        size='md'
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
          mt={15}
          size='md'
        />
        <TextInput
          leftSection={<IconSearch />}
          size='md'
          mt={15}
          withAsterisk
          label="Cédula"
          placeholder="Cédula"
          {...form.getInputProps('dni')}
        />
      </Group>
      <TextInput
        leftSection={<IconPhone />}
        mt={15}
        withAsterisk
        size='md'
        label="Teléfono"
        placeholder="Tu teléfono"
        {...form.getInputProps('phone')}
      />
      <Grid mt={15}>
        <Grid.Col span={6}>
          <PasswordInput
            withAsterisk
            size='md'
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
            size='md'
            placeholder="Confirma tu contraseña"
            {...form.getInputProps('confirm_password')}
          />
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default AddSeller;
