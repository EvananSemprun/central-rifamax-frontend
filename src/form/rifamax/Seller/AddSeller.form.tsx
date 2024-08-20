import { useForm } from '@mantine/form';
import { IAddSellerForm } from '@interfaces/index';
import { TextInput, PasswordInput, Grid } from '@mantine/core';
import { IconAt, IconLock, IconPhone, IconSearch, IconUser, IconUserSearch } from '@tabler/icons-react';

const AddSeller = () => {
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
      dni: (value) => (/^\d+$/.test(value) ? null : 'Cedula must contain only numbers'),
      phone: (value) => (/^\d+$/.test(value) ? null : 'Telefono must contain only numbers'),
    },
  });

  return (
    <>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              leftSection={<IconUser />}
              size='lg'
              withAsterisk
              label="Nombre"
              placeholder="Nombre"
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              leftSection={<IconUser />}
              size='lg'
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
          size='lg'
          label="Correo electrónico"
          placeholder="rifero@rifamax.com"
          {...form.getInputProps('email')}
        />
				<TextInput
					leftSection={<IconSearch />}
					size='lg'
					withAsterisk
					label="Cédula"
					placeholder="Cédula"
					{...form.getInputProps('dni')}
				/>
        <TextInput
          leftSection={<IconPhone />}
          mt={15}
          withAsterisk
          size='lg'
          label="Teléfono"
          placeholder="Tu teléfono"
          {...form.getInputProps('phone')}
        />
        <Grid mt={15}>
          <Grid.Col span={6}>
            <PasswordInput
              withAsterisk
              size='lg'
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
              label="Confirmar contraseña"
              size='lg'
              placeholder="Confirma tu contraseña"
              {...form.getInputProps('confirm_password')}
            />
          </Grid.Col>
        </Grid>

      </form>
    </>
  );
};

export default AddSeller;
