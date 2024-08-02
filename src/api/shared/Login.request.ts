import { ILoginBody } from "@interfaces/index";
import axios from "axios";

// POST /login
export const authRequest = (data: ILoginBody) => {
  return axios.post(`${import.meta.env.VITE_X100_URL_BASE}/login`, data)
}
