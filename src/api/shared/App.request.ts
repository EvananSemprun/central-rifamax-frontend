import axios from 'axios'

// GET /shared/users/profile
export const getUserProfile = (token: string) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/shared/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}