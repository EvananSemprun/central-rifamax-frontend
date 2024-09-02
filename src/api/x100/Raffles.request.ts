import axios from "axios"
import { 
  IGetProgress, 
  IGetTriples
} from "@interfaces/requests.interfaces"

export const getTriples = ({ token }: IGetTriples) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/x100/raffles`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const getProgress = ({ token, raffleId }: IGetProgress) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/x100/raffles/progress?raffle_id=${raffleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
