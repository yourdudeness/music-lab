import clsx from "clsx";

import styles from "./button.module.css";

interface ButtonPrimitiveProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  intent?: "neutral" | "accent" | "ghost";
  shape?: "round" | "square";
  size?: "s" | "m" | "l" | "uncontrolled";
}

export const Button = ({
  children,
  className,
  intent = "neutral",
  shape = "square",
  size = "uncontrolled",
  ...props
}: ButtonPrimitiveProps) => {
  return (
    <button
      className={clsx(styles.root, className)}
      data-intent={intent}
      data-shape={shape}
      data-size={size}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
