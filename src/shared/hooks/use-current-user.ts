import { useQuery } from "@tanstack/react-query";
import { getUser, UserData } from "../api/user/get-user";
import { use, useEffect } from "react";

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
    if (isSuccess && onError) {
      onError(data);
    }
  }, [isError, data]);

  console.log(data, isSuccess, "data current user");

  return { data, error, isLoading, isError, isSuccess, refetch };
};
