import React, { FormEventHandler, ReactNode } from "react";
import clsx from "clsx";

import styles from "./auth-form.module.css";
import { Logo } from "../Logo/Logo";

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
      <Logo />
      <form
        onSubmit={onSubmit}
        {...props}
        className={clsx(styles.form, "mt-7")}
      >
        {children}
      </form>
    </div>
  );
};
