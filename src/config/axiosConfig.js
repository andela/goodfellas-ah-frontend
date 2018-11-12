import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQyMDQ0NDA1LCJleHAiOjE1NDIxMzA4MDV9.4xcHcNc6VpVU6huZDdDcAie5I5xvTXm1ruNuUU9vhxk' },
});

export default axiosInstance;
