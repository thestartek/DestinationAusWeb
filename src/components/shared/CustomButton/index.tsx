import { ArrowRight } from "lucide-react";
import styles from "./customButton.module.css";
import React from "react";

type CustomButtonProps = {
  title: string;
  icon: React.JSX.Element;
};

const CustomButton = ({ title, icon }: CustomButtonProps) => {
  return (
    <button className={`bg-slate-300 ${styles.button}`}>
      <span className="text-slate-950">{title}</span>{" "}
      <div className={`bg-primary ${styles.icon}`}>{icon}</div>
    </button>
  );
};

export default CustomButton;
