import clsx from "clsx";

import styles from "./button.module.css";

interface ButtonPrimitiveProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  intent?: "neutral" | "accent";
}

export const Button = ({
  children,
  className,
  intent = "neutral",
  ...props
}: ButtonPrimitiveProps) => {
  return (
    <button
      className={clsx(styles.root, className)}
      data-intent={intent}
      {...props}
    >
      {children}
    </button>
  );
};
