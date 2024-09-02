import axios from "axios";
import { ILoginBody } from "@interfaces/requests.interfaces";

// POST /login
export const authRequest = (data: ILoginBody) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/login`, data)
}
