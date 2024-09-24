import axios from 'axios'
import { 
	ISendToApp, 
	IPayRaffle, 
	IGetRaffles, 
	IAddRaffles, 
  IGetTicketId,
	IRepeatToApp, 
	IUnpayRaffle,
	IRefundRaffle, 
  IGetCloseDayInfo,
  IGetClosedRaffles,
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
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/send_app`, {
    raffle_id: raffle_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// POST /rifamax/raffles/repeat
export const repeatToApp = ({ token, raffle_id, data }: IRepeatToApp) => {
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
    rifamax_raffle: {
      id: raffle_id, 
      payment_info: {
        price: data.price,
        currency: data.currency,
      }
    }
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

// POST /rifamax/raffles/unpay
export const unpayRaffle = ({ token, raffle_id }: IUnpayRaffle) => {
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

// GET /rifamax/tickets/get_tickets?raffle_id={id}
export const getTicketId = ({ token, raffleId }: IGetTicketId) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/tickets/get_tickets?raffle_id=${raffleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

// GET /rifamax/raffles/close_day
export const getCloseDayRaffles = (token: string) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/close_day`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// GET /rifamax/raffles/close_day_info
export const getCloseDayInfo = ({ token }: IGetCloseDayInfo) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/close_day_info`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
