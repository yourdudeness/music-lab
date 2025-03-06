import clsx from "clsx";
import React from "react";
import styles from "./input.module.css";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = ({ className, ...props }: InputProps) => {
  return <input {...props} className={clsx(styles.root, className)} />;
};
