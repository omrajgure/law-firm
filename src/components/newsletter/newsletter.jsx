import React from "react";
import styles from "./newsletter.module.css";
export const Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <h1>Subscribe Our Newsletter</h1>
        <div className={styles.input_but}>
          <input
            style={{
              padding: "0.8rem",
              borderRadius: "8px 0px 0px 8px",
              boxSizing: "border-box",
            }}
            placeholder="Name:"
          />{" "}
          <input
            style={{ padding: "0.8rem", boxSizing: "border-box" }}
            placeholder="Enter your Email:"
          />
          <button
            style={{
              borderRadius: "0 8px 8px 0",
              width: "5rem",
              boxSizing: "border-box",
              backgroundColor: "var(--color-primary)",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};
