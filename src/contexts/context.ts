import { createContext } from "react";
import { UserData } from "../shared/api/user/get-user";

type AuthContextType = {
  user: UserData | null;
  signIn: (callback: VoidFunction) => void;
  loading: boolean;
  signOut: (callback?: VoidFunction) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
