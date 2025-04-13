import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../api/user/logout";
import { useEffect } from "react";

type Props = {
  onSuccess?: () => void;
  onError?: () => void;
};

const LOGOUT_QUERY_KEY = "logout";

export const useLogout = (props?: Props) => {
  const { onSuccess, onError } = props || {};
  const navigate = useNavigate();
  const logoutQuery = useQuery({
    queryKey: [LOGOUT_QUERY_KEY],
    queryFn: logout,
    enabled: false
  });

  const { isError, isSuccess } = logoutQuery;

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.();
      navigate("/sign-in");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      onError?.();
    }
  }, [isError]);

  return logoutQuery;
};
