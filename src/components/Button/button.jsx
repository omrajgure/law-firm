import React from "react";
import styles from "./button.module.css";
export const Button_cus = ({ text }) => {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
};
