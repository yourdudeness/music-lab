import { useMutation } from "@tanstack/react-query";
import { refreshToken, RefreshTokenData } from "../api/user/refresh-token";

type Props = {
  onSuccess?: (data: RefreshTokenData) => void;
  onError?: (error: any) => void; //TODO: fix any
};

export const useRefreshToken = ({ onSuccess, onError }: Props) => {
  const query = useMutation({
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

  return query;
};
