import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASH_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});