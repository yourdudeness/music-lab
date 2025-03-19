import clsx from "clsx";
import React from "react";
import styles from "./input.module.css";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  errorMessage?: string | undefined;
}

export const Input = ({ className, errorMessage, ...props }: InputProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <input {...props} className={clsx(styles.root)} />
      {errorMessage !== undefined && (
        <span className={clsx("text-red-500 text-sm", styles.error)}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
