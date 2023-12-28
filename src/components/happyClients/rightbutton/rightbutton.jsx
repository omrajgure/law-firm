import React from "react";
import styles from "./rightbutton.module.css";
import rightarrow from "../../../assets/Down right.png";
export const Rightbutton = () => {
  return (
    <div className={styles.wrapper}>
      <img src={rightarrow} alt="right" />
    </div>
  );
};
