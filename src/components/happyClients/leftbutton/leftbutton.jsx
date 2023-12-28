import React from "react";
import styles from "./leftbutton.module.css";
import leftarrow from "../../../assets/Down left.png";

export const Leftbutton = () => {
  return (
    <div className={styles.wrapper}>
      <img src={leftarrow} alt="left" />
    </div>
  );
};
