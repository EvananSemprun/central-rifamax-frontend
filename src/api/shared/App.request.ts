import axios from 'axios'
import { IUploadAvatar } from '@interfaces/requests.interfaces';

// GET /shared/users/profile
export const getUserProfile = (token: string) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/shared/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// POST/shared/users/avatar
export const uploadAvatar = ({ token, avatar }: IUploadAvatar) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/shared/users/avatar`, {
    shared_user: {
      avatar: avatar
    }
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    },
  });
};