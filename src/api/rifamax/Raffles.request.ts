import axios from 'axios'
import { IAddRaffles, IGetRaffles } from '@interfaces/requests.interfaces'

// GET /rifamax/raffles
export const getRaffles = ({ token, queryType, page, items }: IGetRaffles) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/${queryType}?page=${page}&items=${items}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// POST /rifamax/raffles
export const addRaffles = ({ token, data }: IAddRaffles) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles`, { 
    rifamax_raffle: data
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}