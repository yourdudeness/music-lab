import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from "react";
import { AuthContext } from "./context";
import { useCurrentUser } from "../shared/hooks/use-current-user";
import { UserData } from "../shared/api/user/get-user";
import { useRefreshToken } from "../shared/hooks/use-refresh-token";
import { apiClient } from "../shared/api/http-client";

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserData | null>(null);

  const storedToken = localStorage.getItem("token");
  const [token, setToken_] = useState(storedToken);

  //   if (storedToken) {
  //     apiClient.defaults.headers.common["Authorization"] =
  //       "Bearer " + storedToken;
  //   }

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

  const setToken = (newToken: string | null) => {
    setToken_(newToken);
  };

  const signIn = useCallback((callback: VoidFunction) => {
    currentUser.refetch();
    callback();

    console.log("sign in");
  }, []);

  useLayoutEffect(() => {
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete apiClient.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      user: user,
      token,
      loading: currentUser.isLoading,
      setToken,
      signIn
    }),
    [token, user, currentUser.isLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
