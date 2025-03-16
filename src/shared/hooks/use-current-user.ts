import { useQuery } from "@tanstack/react-query";
import { getUser, UserData } from "../api/user/get-user";
import { use, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../contexts/use-auth";

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
