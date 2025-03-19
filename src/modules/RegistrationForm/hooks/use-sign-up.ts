import { useMutation } from "@tanstack/react-query";
import { SignInData, SignUpParams, signUp } from "../api/user";

type Props = {
  onSuccess?: () => void;
  onError?: (error: any) => void; // fix any
};

export const useSignUp = ({ onSuccess, onError }: Props) => {
  const mutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signUp,
    onSuccess: (data) => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    }
  });

  return mutation;
};
