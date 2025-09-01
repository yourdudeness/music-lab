import { isValidElement } from "react";
import styles from "./skeleton.module.css";
import React from "react";
import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
  pending?: boolean;
  className?: string;
};

export function Skeleton({ children, pending, className, ...props }: Props) {
  if (!pending) {
    return <>{children}</>;
  }
  const isReactComponent = isValidElement(children);

  if (isReactComponent) {
    const childElement = children as React.ReactElement<any>;
    return React.cloneElement(childElement, {
      className: clsx(styles.skeleton, className, childElement.props.className),
      "aria-hidden": true,
      tabIndex: -1,
      ...props
    });
  }

  return (
    <span
      aria-hidden={true}
      tabIndex={-1}
      className={styles.skeleton}
      data-skeleton-inline
      {...props}
    >
      {children}
    </span>
  );
}
