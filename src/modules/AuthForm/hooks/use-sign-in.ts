import { useMutation } from "@tanstack/react-query";
import { SignInData, signIn } from "../api/user";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../contexts/use-auth";

type Props = {
  onSuccess?: (data: SignInData) => void;
  onError?: (error: any) => void; //error any need to be fixed
};

export const useSignIn = ({ onSuccess, onError }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const { mutate, data, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signIn,
    // onSuccess: (data) => {
    //   console.log(data, "data");
    //   onSuccess?.(data);
    // },
    onError: (error) => {
      console.log(error, "error");
      onError?.(error);
    }
  });

  useEffect(() => {
    if (isSuccess) {
      const from = location.state?.from?.pathname || "/";
      auth.signIn(() => {
        navigate(from);
      });
    }
  }, [isSuccess]);
  return { mutate, data, error, isPending, isError, isSuccess };
};
