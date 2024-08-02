import axios from 'axios'

// POST /refresh
export const refreshTokenRequest = (token: string) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/refresh`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}