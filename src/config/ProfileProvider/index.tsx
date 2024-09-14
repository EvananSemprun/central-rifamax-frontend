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
  const { token, logout } = useAuth()
  const { updateNoToken } = useUser()
  
  const location = useLocation()

  const { data: query, isSuccess, isError, isLoading} = useQuery<AxiosResponse<IUser['user']>>({
    queryKey: ['user', 'profile'],
    queryFn: () => getUserProfile(token),
    retry: retry,
    enabled: !publicRoutes.includes(location.pathname) && !!token,
  })

  // if (isError) {
  //   updateNoToken({
  //     user: {
  //       id: 0,
  //       avatar: null,
  //       name: 'Integrator',
  //       email: 'integrator@gmail.com',
  //       dni: 'J-00000000',
  //       is_active: true,
  //       phone: '+58 (412) 000-0000',
  //       role: 'Taquilla',
  //       content_code: null,
  //       influencer_id: 0,
  //       is_first_entry: false
  //     }
  //   }) 
  //   return null
  // }

  if (isSuccess) {
    updateNoToken({ user: query.data })
  }

  if (publicRoutes.includes(location.pathname)) return children

  if (isLoading) {
    return <LoaderScreen label='Cargando usuario...' />
  }

  return children
}
