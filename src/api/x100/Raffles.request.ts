import axios from "axios"
import { 
  IGetTriples,
  IGetProgress, 
  IGetTripleById, 
} from "@interfaces/requests.interfaces"

// GET /x100/raffles
export const getTriples = ({ token }: IGetTriples) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/x100/raffles`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// GET /x100/raffles/{raffleId}
export const getTripleById = ({ token, raffleId }: IGetTripleById) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/x100/raffles/${raffleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

// GET /x100/raffles/progress?raffle_id={raffleId}
export const getProgress = ({ token, raffleId }: IGetProgress) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/x100/raffles/progress?raffle_id=${raffleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
