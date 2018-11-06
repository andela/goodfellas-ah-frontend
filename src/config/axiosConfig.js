import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:4000/api/',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQxNDMwNTcyLCJleHAiOjE1NDE1MTY5NzJ9.PBffdVh3QV69pdJ25n5NUH5hBoBd7tBmlyY4xZwzDdc' },
});

export default axiosInstance;
