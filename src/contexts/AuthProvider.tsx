import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context";
import { useCurrentUser } from "../shared/hooks/use-current-user";
import { UserData } from "../shared/api/user/get-user";
import { useRefreshToken } from "../shared/hooks/use-refresh-token";

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState<UserData | null>(null);

  const currentUser = useCurrentUser({
    onSuccess: (data) => {
      setUser(data);
    },
    onError: () => {
      setUser(null);
    }
  });

  //   const refreshTokenMutation = useRefreshToken({
  //     onSuccess: () => currentUser.refetch()
  //   });

  console.log(
    currentUser,
    currentUser.data,
    currentUser.isSuccess,
    "curernt user"
  );

  console.log(token, "token auth");

  const setToken = (newToken: string | null) => {
    setToken_(newToken);
  };

  const signIn = useCallback((callback: VoidFunction) => {
    currentUser.refetch();
    callback();
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      user: user,
      token,
      setToken,
      signIn
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
