import axios from 'axios';
import useAuth from '@hooks/useAuth';

export const fetcherWithAxios = async (url: string) => {
  const { token } = useAuth();
  
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};