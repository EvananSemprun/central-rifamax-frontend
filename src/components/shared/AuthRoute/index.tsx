import useAuth from '@hooks/useAuth'
import LoaderScreen from '../Loaders/LoaderScreen'
import Header from '@components/shared/Header/Header'
import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { InfoNotification } from '../Notifications'
import { useMutation } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { refreshTokenRequest } from '@api/shared/AuthRoute.request'

function index() {
  const { logout, token } = useAuth()

  const authRequest = useMutation({
    mutationKey: ['auth', 'route'],
    retry: 1,
    mutationFn: (token: string) => refreshTokenRequest(token),
  })

  useEffect(() => {
    authRequest.mutate(token)
  }, [])

  if (authRequest.isPending) return <LoaderScreen label='Verificando acceso...' />

  if (authRequest.error) {
    logout()
    notifications.clean()
    InfoNotification({
      title: 'Sesión expirada',
      label: 'Por favor, inicia sesión nuevamente',
      position: 'top-right'
    })
    return <Navigate to='/login' />
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default index