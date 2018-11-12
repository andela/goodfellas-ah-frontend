import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:4000/api/',
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQxOTI4NDg1LCJleHAiOjE1NDIwMTQ4ODV9.F1ylPbgq11xjJrd9oZSSwV6kRtpf2QioG3G4d2EvMnc' },
});

export default axiosInstance;
