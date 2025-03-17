import { useLayoutEffect } from "react";
import { useAuth } from "../../contexts/use-auth";
import { useNavigate } from "react-router";

export const useRedirectToMain = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (auth.user) {
      navigate("/", { replace: true });
    }
  }, [auth.user, navigate]);
};
