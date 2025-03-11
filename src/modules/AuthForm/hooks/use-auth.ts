import { useMutation, useQuery } from "@tanstack/react-query";
import { SignInData, SignInParams, signIn } from "../api/user";

export const useSignIn = () => {
  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log("Успешный вход:", data);
    },
    onError: (error) => {
      console.error("Ошибка входа:", error);
    }
  });

  return mutation;
};
