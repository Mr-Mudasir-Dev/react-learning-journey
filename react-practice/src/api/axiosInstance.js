import axios from "axios";

const apiClint = axios.create({
  baseURL: "http://localhost:5126/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClint.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClint.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expire ya invalid
      localStorage.removeItem("token");
      window.location.href = "/auth/login"; // login pe bhejo
    }
    return Promise.reject(error);
  },
);

export default apiClint;
