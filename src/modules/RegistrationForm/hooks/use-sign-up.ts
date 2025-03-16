import { useMutation, useQuery } from "@tanstack/react-query";
import { SignInData, SignUpParams, signUp } from "../api/user";

export const useSignUp = () => {
  const mutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log("Успешный вход:", data);
    },
    onError: (error) => {
      console.error("Ошибка входа:", error);
    }
  });

  return mutation;
};
