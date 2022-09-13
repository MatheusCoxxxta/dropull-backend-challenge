import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PINATA_URL,
});

export default api;
