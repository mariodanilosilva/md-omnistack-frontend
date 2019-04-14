import axios from 'axios';

const api = axios.create({
  baseURL: 'https://md-omnistack-backend.herokuapp.com',
});

export default api;