import useAuth from '@hooks/useAuth'
import useUser from '@hooks/useUser'
import LoaderScreen from '@components/shared/Loaders/LoaderScreen'
import { AxiosResponse } from 'axios'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { publicRoutes } from '@assets/PublicRoutes'
import { IUser } from '@interfaces/models.interfaces'
import { getUserProfile } from '@api/shared/App.request'

interface IProfileProvider {
  retry?: number
  children: React.ReactNode
}

export const ProfileProvider = ({ retry, children }: IProfileProvider) => {
  const { token } = useAuth()
  const { updateNoToken } = useUser()
  
  const location = useLocation()

  const { data: query, isSuccess, isLoading} = useQuery<AxiosResponse<IUser['user']>>({
    queryKey: ['user', 'profile'],
    queryFn: () => getUserProfile(token),
    retry: retry,
    enabled: !publicRoutes.includes(location.pathname) && !!token,
  })

  if (isSuccess) {
    updateNoToken({ user: query.data })
  }

  if (publicRoutes.includes(location.pathname)) return children

  if (isLoading) {
    return <LoaderScreen label='Cargando usuario...' />
  }

  return children
}
