import React from "react";
import styles from "./navbar.module.css";
import brandlogo from "../../assets/brandlogo.png";
import insta from "../../assets/insta_tweet_icon.png";
export const Navbar = ({ button }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={brandlogo} alt="brandimg" />
        <h4>IGSTUDIO</h4>
      </div>

      <ul className={styles.listWrapper}>
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About Us</li>
      </ul>
      {button ? (
        <button className={styles.button}>Contact now</button>
      ) : (
        <img src={insta} alt="icon" />
      )}
    </div>
  );
};
