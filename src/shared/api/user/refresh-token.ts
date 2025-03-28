import { apiClient } from "../http-client";

export type RefreshTokenData = {
  accessToken: string;
  refreshToken: string;
};

export const refreshToken = async () => {
  const result = await apiClient.post<RefreshTokenData>("/auth/refresh", {});

  return result.data;
};
