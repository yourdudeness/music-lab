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

let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

async function refreshToken(): Promise<string | null> {
  if (!isRefreshing) {
    isRefreshing = true;
    try {
      await apiClient.post<RefreshTokenData>(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );

      return null;
    } catch (error) {
      window.location.href = "/sign-in";

      return null;
    } finally {
      isRefreshing = false;
      refreshPromise = null;
    }
  }

  return refreshPromise || null;
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthPage = ["/sign-in", "/sign-up"].includes(
      window.location.pathname
    );
    if (isAuthPage) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!refreshPromise) {
        refreshPromise = refreshToken();
      }

      const newAccessToken = await refreshPromise;

      if (newAccessToken) {
        return apiClient(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
