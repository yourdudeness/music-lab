import { useMutation } from "@tanstack/react-query";
import { refreshToken, RefreshTokenData } from "../api/user/refresh-token";

type Props = {
  onSuccess?: (data: RefreshTokenData) => void;
  onError?: (error: any) => void; //error any need to be fixed
};

export const useRefreshToken = ({ onSuccess, onError }: Props) => {
  const { mutate, data, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["refreshToken"],
    mutationFn: refreshToken,
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
