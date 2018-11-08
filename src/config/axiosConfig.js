import axios from 'axios';

const baseURL = 'http://127.0.0.1:4000/api';
export default axios.create({
  baseURL,
  headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQxNjg5Mjk5LCJleHAiOjE1NDE3NzU2OTl9.-FLIIH-auOYx87XV30iP8MRra8zvyRvWEfRzXutpr7I' },
});

export const unprotectedRoute = axios.create({ baseURL });
