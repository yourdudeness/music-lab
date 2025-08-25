import { Outlet } from "react-router";
import { Sidebar } from "../modules/sidebar/components/Sidebar";
import { Button } from "../shared/components/Button";
import { useAuth } from "../contexts/use-auth";
import styles from "./base-layout.module.css";
import clsx from "clsx";
import { SearchForm } from "@/shared/components/Search-form/search-form";
import { LogOut } from "@/shared/icons/log-out";

export const BaseLayout: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <div className={styles.base}>
      <Sidebar />
      <SearchForm />
      <Button
        onClick={handleSignOut}
        intent="ghost"
        shape="round"
        size="m"
        className={clsx("absolute top-11 right-22", styles["sign-out-button"])}
      >
        <LogOut />
      </Button>
      <Outlet />
    </div>
  );
};
