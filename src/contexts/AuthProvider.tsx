import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context";
import { useCurrentUser } from "../shared/hooks/use-current-user";
import { UserData } from "../shared/api/user/get-user";
import { useRefreshToken } from "../shared/hooks/use-refresh-token";

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const currentUser = useCurrentUser({
    onSuccess: (data) => {
      setUser(data);
      setLoading(false);
    },
    onError() {
      setUser(null);
      setLoading(false);
    }
  });

  const refreshTokenMutation = useRefreshToken({
    onSuccess: () => currentUser.refetch()
  });

  useEffect(() => {
    if (currentUser.isLoading || refreshTokenMutation.isPending) {
      setLoading(true);
    }
  }, [currentUser.isLoading, refreshTokenMutation.isPending]);

  const signIn = useCallback((callback: VoidFunction) => {
    currentUser.refetch();
    callback();
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      loading,
      signIn
    }),
    [user, loading, signIn]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
