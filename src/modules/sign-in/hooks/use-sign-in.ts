import { useMutation } from "@tanstack/react-query";
import { SignInData, signIn } from "../api/user";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../contexts/use-auth";

type Props = {
  onSuccess?: (data: SignInData) => void;
  onError?: (error: any) => void; //TODO: fix any
};

export const useSignIn = ({ onError }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const query = useMutation({
    mutationKey: ["auth"],
    mutationFn: signIn,
    onError: (error) => {
      onError?.(error);
    }
  });

  const { isSuccess } = query;

  useEffect(() => {
    if (isSuccess) {
      const from = location.state?.from?.pathname || "/";
      auth.signIn(() => {
        navigate(from);
      });
    }
  }, [isSuccess]);

  return query;
};
