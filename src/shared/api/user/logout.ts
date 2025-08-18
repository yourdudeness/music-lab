import { apiClient } from "../http-client";

export const logout = async () => {
  const result = await apiClient.get("/auth/logout");

  return result.data;
};
