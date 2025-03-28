import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/user";

type Props = {
  onSuccess?: () => void;
  onError?: (error: any) => void; // TODO: fix any
};

export const useSignUp = ({ onSuccess, onError }: Props) => {
  const mutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signUp,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    }
  });

  return mutation;
};
