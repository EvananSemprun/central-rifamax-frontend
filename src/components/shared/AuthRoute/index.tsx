import useAuth from '@hooks/useAuth'
import LoaderScreen from '../Loaders/LoaderScreen'
import Header from '@components/shared/Header/Header'
import { AxiosResponse } from 'axios'
import { IAuthRoute } from '@interfaces/index'
import { Outlet, Navigate } from 'react-router-dom'
import { InfoNotification } from '../Notifications'
import { useQuery } from '@tanstack/react-query'
import { notifications } from '@mantine/notifications'
import { refreshTokenRequest } from '@api/shared/AuthRoute.request'
import { IRenewTokenResponse } from '@interfaces/requests.interfaces'

function index({ roles }: IAuthRoute) {
  const { logout, token } = useAuth()

  const { data: request, isLoading, error, isSuccess } = useQuery<AxiosResponse<IRenewTokenResponse, string>>({
    queryKey: ['auth', 'route'],
    retry: 1,
    queryFn: () => refreshTokenRequest(token),
  })

  if (isLoading) return <LoaderScreen label='Verificando acceso...' />

  if (error) {
    logout()
    notifications.clean()
    InfoNotification({
      title: 'Sesión expirada',
      label: 'Por favor, inicia sesión nuevamente',
      position: 'top-right'
    })
    return <Navigate to='/login' />
  }

  if (isSuccess) {
    if (!roles.includes(request.data.user.role)) {
      return <Navigate to='/' />
    }
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default index