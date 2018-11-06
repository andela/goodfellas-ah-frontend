import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:4000/api/',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQxNDExMjQ1LCJleHAiOjE1NDE0OTc2NDV9.9ZvHgIwtvJCRoQVI87xgfb64CHBr9PkKTmkT27E23KI' },
});

export default axiosInstance;
