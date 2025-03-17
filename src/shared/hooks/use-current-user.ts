import { useQuery } from "@tanstack/react-query";
import { getUser, UserData } from "../api/user/get-user";
import { useEffect } from "react";

type Props = {
  onSuccess?: (data: UserData) => void;
  onError?: (error: any) => void;
};

export const useCurrentUser = ({ onSuccess, onError }: Props) => {
  const { data, error, isLoading, isError, isSuccess, refetch } =
    useQuery<UserData>({
      queryKey: ["users/me"],
      retry: false,
      retryOnMount: false,
      queryFn: getUser,
      select: (data) => data
    });

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && onError) {
      onError(data);
    }
  }, [isError, data]);

  return { data, error, isLoading, isError, isSuccess, refetch };
};
