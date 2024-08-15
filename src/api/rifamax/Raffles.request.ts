import axios from 'axios'
import { IAddRaffles, IGetRaffles, IRepeatToApp, ISendToApp } from '@interfaces/requests.interfaces'

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

// PUT /rifamax/raffles/1/send
export const sendToApp = ({ token, raffle_id }: ISendToApp) => {
  return axios.put(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/send`, {
    raffle_id: raffle_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

}// PUT /rifamax/raffles/1/reload
export const repeatToApp = ({ token, raffle_id, data}: IRepeatToApp) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/repeat`, {
    raffle_id: raffle_id,
    data: data
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}