import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: "https://nestjs-03-travolks.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


// Fungsi untuk refresh token

// const refreshToken = async () => {
//   try {
//     const response = await axiosInstance.post("/auth/refresh-token");
//     const newAccessToken = response.data.access_token;

//     // Simpan token baru ke dalam cookie
//     Cookies.set("accessToken", newAccessToken);
//     return newAccessToken;
//   } catch (error) {
//     // Tangani error jika refreshToken gagal
//     throw error;
//   }
// };

// Intercept request dan set Authorization header dengan bearer token

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const accessToken = Cookies.get("accessToken");

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Intercept response dan coba refresh token jika diperlukan

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const accessToken = await refreshToken();

//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (error) {
//         // Tangani error jika refreshToken gagal
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
