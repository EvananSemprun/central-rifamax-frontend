import axios from 'axios'
import { 
	ISendToApp, 
	IPayRaffle, 
	IGetRaffles, 
	IAddRaffles, 
	IRepeatToApp, 
	IUnpayRaffle,
	IRefundRaffle, 
  IGetClosedRaffles
} from '@interfaces/requests.interfaces'

// GET /rifamax/raffles/{queryType}?page={page}&items={items}
export const getRaffles = ({ token, queryType, page, items }: IGetRaffles) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/${queryType}?page=${page}&items=${items}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// GET /rifamax/raffles/closed?page={page}&items={items}
export const getClosedRaffles = ({ token, page, items }: IGetClosedRaffles) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/closed?page=${page}&items=${items}`, {
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

// POST /rifamax/raffles/send
export const sendToApp = ({ token, raffle_id }: ISendToApp) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/send`, {
    raffle_id: raffle_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// POST /rifamax/raffles/repeat
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

// POST /rifamax/raffles/pay
export const payRaffle = ({ token, raffle_id, data }: IPayRaffle) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/pay`, {
    raffle_id: raffle_id,
    data: data
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

// POST /rifamax/raffles/unpay
export const unPayRaffle = ({ token, raffle_id }: IUnpayRaffle) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/unpay`, {
    raffle_id: raffle_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// POST /rifamax/raffles/refund
export const refundRaffle = ({ token, raffle_id }: IRefundRaffle) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/refund`, {
    raffle_id: raffle_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
