import axios from 'axios';
import { IFilterSeller } from '@interfaces/requests.interfaces';

export const filterSeller = ({ token, query }: IFilterSeller) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/sellers/search?query=${query}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}