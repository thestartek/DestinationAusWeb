import styles from "./customButton.module.css";
import React from "react";

type CustomButtonProps = {
  title: string;
  icon: React.JSX.Element;
  otherStyles?: string;
};

const CustomButton = ({ title, icon, otherStyles }: CustomButtonProps) => {
  return (
    <button className={`bg-slate-300 ${styles.button} ${otherStyles}`}>
      <span className="text-slate-950">{title}</span>{" "}
      <div className={`bg-primary ${styles.icon}`}>{icon}</div>
    </button>
  );
};

export default CustomButton;
