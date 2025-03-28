import { apiClient } from "../../../shared/api/http-client";

export type SignUpParams = {
  email: string;
  password: string;
};

export type SignUpData = {
  accessToken: string;
  refreshToken: string;
};

export const signUp = async (params: SignUpParams) => {
  const result = await apiClient.post<SignUpData>("/auth/register", {
    email: params.email,
    password: params.password
  });

  return result.data;
};
