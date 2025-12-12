// src/lib/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// For admin requests (with token)
const API_ADMIN = axios.create({
  baseURL: 'http://localhost:5000/api',
});

API_ADMIN.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { API, API_ADMIN };