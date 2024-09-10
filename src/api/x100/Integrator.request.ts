import axios from "axios"
import { IGetCDAPlayer } from "@interfaces/requests.interfaces"

// GET https://data.cdapuestas.com/wallets_rifas?player_id={playerId}&currency={currency}
export const getCDAPlayer = ({ playerId, currency }: IGetCDAPlayer) => {
  return axios.get(`https://dataweb.cdapuestas.com/wallets_rifas?player_id=${playerId}&currency=${currency}`)
}
