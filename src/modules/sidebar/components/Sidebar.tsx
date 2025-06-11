import { useEffect, useState } from "react";
import { Logo } from "../../../shared/components/Logo/Logo";
import { Link } from "react-router";
import styles from "./sidebar.module.css";
import clsx from "clsx";
import { useAuth } from "../../../contexts/use-auth";
import { useTheme } from "@/shared/components/ThemeContext/theme-context";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
