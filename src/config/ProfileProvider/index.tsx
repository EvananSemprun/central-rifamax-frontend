import useAuth from '@hooks/useAuth'
import useUser from '@hooks/useUser'
import React, { useEffect } from 'react'
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

  const query = useQuery<AxiosResponse<IUser['user']>>({
    queryKey: ['user', 'profile'],
    queryFn: () => getUserProfile(token),
    retry: retry,
    enabled: !publicRoutes.includes(location.pathname) && !!token,
  })

  useEffect(() => {
    if (query.isError) {
      logout()
    } else if (query.isSuccess) {
      updateNoToken({ user: query.data.data })
    }
  }, [query.isError, query.isSuccess])

  if (publicRoutes.includes(location.pathname)) return children

  if (query.isLoading) {
    return <LoaderScreen label='Cargando usuario...' />
  }

  return children
}
