import axios from "axios"
import { 
  IGetProgress 
} from "@interfaces/requests.interfaces"

export const getProgress = ({ token, raffleId }: IGetProgress) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/x100/raffles/progress?raffle_id=${raffleId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
