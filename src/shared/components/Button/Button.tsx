import clsx from "clsx";

import styles from "./button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  intent?: "neutral" | "accent";
}
export const Button = ({ children, intent = "neutral" }: ButtonProps) => {
  return (
    <button className={clsx(styles.root)} data-intent={intent}>
      {children}
    </button>
  );
};
