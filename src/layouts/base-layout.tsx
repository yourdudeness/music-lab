import { Outlet } from "react-router";
import { Sidebar } from "../modules/sidebar/components/Sidebar";
import { Button } from "../shared/components/Button";
import { useAuth } from "../contexts/use-auth";
import styles from "./base-layout.module.css";
import clsx from "clsx";
import { SearchForm } from "@/shared/components/Search-form/search-form";

export const BaseLayout: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <div className={clsx(styles.base)}>
      <Sidebar />
      <SearchForm />
      <Button
        onClick={handleSignOut}
        intent="ghost"
        shape="round"
        size="m"
        className={clsx("absolute top-11 right-22", styles["sign-out-button"])}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 19 24"
          strokeWidth="1"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
      </Button>
      <Outlet />
    </div>
  );
};
