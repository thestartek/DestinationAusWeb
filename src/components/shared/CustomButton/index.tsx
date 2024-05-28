import styles from "./customButton.module.css";
import React from "react";

type CustomButtonProps = {
  title: string;
  icon: React.JSX.Element;
  otherStyles?: string;
  type?: "submit";
};

const CustomButton = ({
  title,
  type,
  icon,
  otherStyles,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-slate-300 ${styles.button} ${otherStyles}`}
    >
      <span className="text-slate-950">{title}</span>{" "}
      <div className={`bg-primary ${styles.icon}`}>{icon}</div>
    </button>
  );
};

export default CustomButton;
