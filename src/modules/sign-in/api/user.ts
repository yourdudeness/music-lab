import { apiClient } from "../../../shared/api/http-client";

export type SignInParams = {
  email: string;
  password: string;
};

export type SignInData = {
  accessToken: string;
  refreshToken: string;
};

export const signIn = async (params: SignInParams) => {
  const result = await apiClient.post<SignInData>("/auth/login", {
    email: params.email,
    password: params.password
  });

  return result.data;
};
