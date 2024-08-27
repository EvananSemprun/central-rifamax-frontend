import UpdateAvatar from './UpdateAvatar';
import { useForm } from '@mantine/form';
import { Card, Button, Group, PasswordInput } from '@mantine/core';
import { IconLockExclamation, IconLock, IconLockCheck } from '@tabler/icons-react';

function EditUserForm() {
  const form = useForm({
    initialValues: {
      old_password: '',
      password: '',
      password_confirmation: '',
    },
    validate: {
      old_password: (value) => (value.length > 0 ? null : 'Debes ingresar tu contraseña actual'),
      password: (value, values) =>
        value.length >= 8 ?
          value !== values.old_password ?
            null :
            'La contraseña debe ser diferente a la antigua' :
          'La nueva contraseña debe tener al menos 8 caracteres',
      password_confirmation: (value, values) =>
        value === values.password ? null : 'Las contraseñas no coinciden',
    },
  });

  return (
    <>
      <Card py={20} radius='md'>

        <UpdateAvatar />

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <PasswordInput
            size='md'
            leftSection={<IconLockExclamation />}
            mt={10}
            withAsterisk
            label="Contraseña actual"
            placeholder="Ingresa tu contraseña actual"
            {...form.getInputProps('old_password')}
          />
          <PasswordInput
            withAsterisk
            leftSection={<IconLock />}
            size='md'
            label="Nueva contraseña"
            placeholder="Ingresa tu nueva contraseña"
            type="password"
            mt="md"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            leftSection={<IconLockCheck />}
            withAsterisk
            size='md'
            label="Confirmar nueva contraseña"
            placeholder="Confirma tu nueva contraseña"
            type="password"
            mt="md"
            {...form.getInputProps('password_confirmation')}
          />

          <Group justify="flex-end" mt="md">
            <Button
              fullWidth
              variant="light"
              color="green"
              type="submit">
              Guardar Cambios
            </Button>
          </Group>
        </form>
      </Card>
    </>
  );
}

export default EditUserForm;
