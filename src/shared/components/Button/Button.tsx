import clsx from "clsx";

import styles from "./button.module.css";

interface ButtonPrimitiveProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  intent?: "neutral" | "accent";
}

export const Button = ({
  children,
  intent = "neutral"
}: ButtonPrimitiveProps) => {
  return (
    <button className={clsx(styles.root)} data-intent={intent}>
      {children}
    </button>
  );
};
