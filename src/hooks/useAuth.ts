import { 
  useSelector,
  useDispatch 
} from 'react-redux'
import { 
  setUser,
  setToken, 
  clearUser
} from '@config/store/reducers/user.slice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@config/store/index'
import { IUser } from '@interfaces/models.interfaces'

export default function useAuth() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const token = String(localStorage.getItem('token')).replace(/'/g, '')

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.user !== null
  )

  const setCredentials = (token: string, user: IUser) => {
    dispatch(setToken(token))
    dispatch(setUser(user))
  }

  const logout = () => {
    dispatch(clearUser())
    navigate('/login')
  }

  return {
    token,
    logout,
    setCredentials,
    isAuthenticated,
  }
}
