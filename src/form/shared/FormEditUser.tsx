import useUser from "@hooks/useUser";
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconLockExclamation, IconLock, IconLockCheck } from '@tabler/icons-react';
import { Avatar, Card, Center, Button, Group, PasswordInput } from '@mantine/core';

const FormEditUser = () => {
  const { user } = useUser();
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const avatarUrl = files.length > 0 && files[0] ? URL.createObjectURL(files[0]) : user?.avatar;
  const form = useForm({
    initialValues: {
      old_Password: '',
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
      <Card py={20} mt={20} radius='md'>
        <Center>
          <Avatar
            size="xl"
            radius="xs"
            w={150}
            h={150}
            src={avatarUrl}
          />
        </Center>

        <Center>
          <Dropzone
            w={150} bg="blue" accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
            <Button ta='center' variant="filled">Actiualizar foto</Button>
          </Dropzone>
        </Center>

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
export default FormEditUser;
