import axios from 'axios';
import { IFilterSeller, IGetRafflers } from '@interfaces/requests.interfaces';

// GET /rifamax/sellers/search?query={query}
export const filterSeller = ({ token, query }: IFilterSeller) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/sellers/search?query=${query}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// GET /shared/users/raffles?page={page}
export const getRafflers = ({ token, page }: IGetRafflers) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/shared/users/rafflers?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
