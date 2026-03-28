import axios from "axios";

const apiClint = axios.create({
  baseURL: "http://localhost:5126/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClint;
