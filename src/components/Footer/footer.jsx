import React from "react";
import styles from "./footer.module.css";
import { Navbar } from "../Navbar/navbar";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar button={false} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "5rem",
            fontSize: "14px",
            color: "gray",
          }}
        >
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};
