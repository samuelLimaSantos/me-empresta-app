
import axios from 'axios';

export const baseURL = 'https://me-empresta-backend.herokuapp.com';
// export const baseURL = 'http://172.17.0.1:3333';

const api = axios.create({
  baseURL,
});

export { api };