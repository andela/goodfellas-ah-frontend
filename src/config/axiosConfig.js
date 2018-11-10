import axios from 'axios';

const baseURL = 'http://127.0.0.1:4000/api';


export default {
  api: axios.create({
    baseURL,
    headers: { Authorization: localStorage.getItem('token') },
  }),
  openRoutes: axios.create({ baseURL }),
};
