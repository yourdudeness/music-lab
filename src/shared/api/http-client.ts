import axios from "axios";
import { RefreshTokenData } from "./user/refresh-token";

export const API_URL = `http://localhost:3000/api`;

export const apiClient = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json"
  }
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthPage = ["sign-in", "sign-up"].some((route) =>
      window.location.pathname.includes(route)
    );

    if (error.response?.status === 401) {
      // console.log("refresh token");
      originalRequest._retry = true;
      try {
        await apiClient.post<RefreshTokenData>(
          "/auth/refresh",
          {},
          {
            withCredentials: true
          }
        );
        return apiClient(originalRequest);
      } catch (error) {
        if (!isAuthPage) {
          window.location.href = "/sign-in";
        }
      }
    }
  }
);
