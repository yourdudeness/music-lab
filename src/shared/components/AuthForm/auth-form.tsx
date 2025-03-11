import React, { FormEventHandler, ReactNode } from "react";
import clsx from "clsx";

import styles from "./auth-form.module.css";
import { Link } from "react-router";

interface FormProps extends React.ComponentPropsWithoutRef<"form"> {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const AuthFormContainer = ({
  children,
  onSubmit,
  className,
  ...props
}: FormProps) => {
  return (
    <div className={clsx(styles.root, className, "font-roboto")}>
      <img src="../../../assets/images/logo2.png" alt="" />
      <form onSubmit={onSubmit} {...props} className={clsx(styles.form)}>
        {children}
      </form>
    </div>
  );
};
