import { apiClient } from "../http-client";

export type UserData = {
  id: string;
  email: string;
  favorites: string[];
};

export const getUser = async () => {
  const result = await apiClient.get<UserData>("/users/me");

  return result.data;
};
