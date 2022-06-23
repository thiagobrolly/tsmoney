import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tsmoney.netlify.app/api/',
  // baseURL: 'http://localhost:3000/api/',
});
