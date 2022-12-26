import axios from 'axios';
import { BASE_URL } from './Api';

export const FetchQuotes = () => {
  return axios.get(`${BASE_URL}`);
};
