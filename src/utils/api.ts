import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to automatically add Authorization header
api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user"); // or get it from your state management
    const token = user ? JSON.parse(user) : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
