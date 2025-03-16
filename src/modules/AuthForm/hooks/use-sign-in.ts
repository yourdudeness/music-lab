import { useMutation, useQuery } from "@tanstack/react-query";
import { SignInData, SignInParams, signIn } from "../api/user";

type Props = {
  onSuccess?: (data: SignInData) => void;
  onError?: (error: any) => void; //error any need to be fixed
};

export const useSignIn = ({ onSuccess, onError }: Props) => {
  const { mutate, data, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log(data, "data");
      onSuccess?.(data);
    },
    onError: (error) => {
      console.log(error, "error");
      onError?.(error);
    }
  });

  return { mutate, data, error, isPending, isError, isSuccess };
};
