import { useQuery } from "@tanstack/react-query";
import { getUser, UserData } from "../api/user/get-user";
import { useEffect } from "react";

type Props = {
  onSuccess?: (data: UserData) => void;
  onError?: (error: any) => void;
};

export const useCurrentUser = ({ onSuccess, onError }: Props) => {
  const query = useQuery<UserData>({
    queryKey: ["users/me"],
    retry: false,
    retryOnMount: false,
    queryFn: getUser
  });

  const { data, isError, isSuccess } = query;

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && onError) {
      onError(data);
    }
  }, [isError, data]);

  return query;
};
