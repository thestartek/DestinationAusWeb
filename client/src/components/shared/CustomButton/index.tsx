import React from "react";
import styles from "./customButton.module.css";

type CustomButtonProps = {
  title: string;
  icon: React.JSX.Element;
  className?: string;
  type?: "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const CustomButton = ({
  title,
  type,
  icon,
  className,
  onClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-slate-300 ${styles.button} ${className} disabled:bg-slate-200 disabled:text-muted-foreground disabled:pointer-events-none`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>{" "}
      <div className={`bg-primary ${styles.icon}`}>{icon}</div>
    </button>
  );
};

export default CustomButton;
