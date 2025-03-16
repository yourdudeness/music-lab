import React from "react";
import { useAuth } from "../../../contexts/use-auth";
import { Navigate, useLocation } from "react-router";

interface Props {
  children: React.ReactNode;
}

export const RequireAuth = ({ children }: Props) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace={true} />;
  }

  return children;
};
