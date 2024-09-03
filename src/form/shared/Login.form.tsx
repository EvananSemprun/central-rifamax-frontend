import useAuth from '@hooks/useAuth'
import { useState } from 'react'
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query'
import { IconAt, IconLock } from '@tabler/icons-react';
import { authRequest } from '@api/shared/Login.request';
import { ILoginResponse } from '@interfaces/requests.interfaces';
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { ErrorNotification, SuccessNotification } from "@components/shared/Notifications";

export default function LoginForm () {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate();
  const { setCredentials } = useAuth();

  const loginRequest = useMutation({ 
    mutationFn: (data: { email: string, password: string }) => authRequest(data),
    onError: () => {
      ErrorNotification({
        title: 'Inicio de sesión fallido',
        label: 'Por favor, verifica tus credenciales',
        position: 'top-right'
      })
    },
    onSuccess: (response: AxiosResponse<ILoginResponse>) => {
      setCredentials(response.data.token, response.data)
      SuccessNotification({
        title: 'Inicio de sesión exitoso',
        label: 'Bienvenido a Rifamax, disfruta de tu experiencia',
        position: 'top-right'
      })
      navigate('/')
    },
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    loginRequest.mutate({ email, password })
  }

  return (
    <form onSubmit={onSubmit}>
      <TextInput 
        mt={30}
        placeholder='correo@rifamax.com'
        leftSection={<IconAt />}
        label='Correo electrónico'
        withAsterisk
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}
      />
      <PasswordInput
        mt={5}
        placeholder='********'
        label='Contraseña'
        leftSection={<IconLock />}
        withAsterisk
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
      />
      <Button
        variant='light'
        color='blue'
        fullWidth
        mt={15}
        type='submit'
      >
        Iniciar Sesión
      </Button>
    </form>
  )
}