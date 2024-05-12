import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nestjs-03-travolks.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});