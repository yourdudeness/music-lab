import { useState } from "react";
import { Logo } from "../../../shared/components/Logo/Logo";
import { Link } from "react-router";
import styles from "./sidebar.module.css";
import clsx from "clsx";
import { useAuth } from "../../../contexts/use-auth";
import { useTheme } from "@/shared/components/ThemeContext/theme-context";
import { BurgerIcon } from "@/shared/icons/burger";
import { MoonIcon } from "@/shared/icons/moon";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { toggleTheme } = useTheme();

  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div
      className={clsx(
        "max-w-2xs w-full h-screen pt-6 pl-8 transition-[background-color] duration-300",
        open && "bg-(--black-3)",
        styles.root
      )}
    >
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="btn-trigger mt-7">
        <button onClick={() => setOpen(!open)} className={styles.trigger}>
          <BurgerIcon />
        </button>
      </div>

      <div
        className={clsx(
          open ? "opacity-100" : "opacity-0",
          "transition-opacity",
          "mt-21",
          "text-base"
        )}
      >
        <nav>
          <ul>
            <li className="mb-6">
              <Link to="/">Главная</Link>
            </li>
            <li className="mb-6">
              <Link to="/my-tracks">Мои треки</Link>
            </li>
            <li className="mb-6">
              <button onClick={handleSignOut}>Выйти</button>
            </li>
            <li>
              <button
                className={styles["handle-color"]}
                onClick={() => toggleTheme()}
              >
                <MoonIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
