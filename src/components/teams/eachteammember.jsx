import React from "react";
import styles from "./eachteammember.module.css";

export const Eachteammember = ({ name, cases, icon, bgcolor }) => {
  return (
    <div
      style={bgcolor && { backgroundColor: "var(--color-primary)" }}
      className={styles.wrapper}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt="icon" />

        <div className={styles.text}>
          <h4>{name}</h4>
          <p>{cases}</p>
        </div>
      </div>
    </div>
  );
};
