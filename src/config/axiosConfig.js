import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:4000/api/',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQxNTE4ODMwLCJleHAiOjE1NDE2MDUyMzB9.-IUNWpInAqmmR1XSabR_BxYytjuuShbpc29gFIF2-6Y' },
});

export default axiosInstance;
