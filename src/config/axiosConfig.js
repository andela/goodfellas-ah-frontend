import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:4000/api/',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQxNTgyMDYyLCJleHAiOjE1NDE2Njg0NjJ9.UmkwSWFFYxGuyQXU2L5HkNmasjiUP1k05H8ULmnRWe4' },
});

export default axiosInstance;
