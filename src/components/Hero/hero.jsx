import React, { useState } from "react";
import styles from "./hero.module.css";
import hero_img from "../../assets/hero_img.png";
import mail_icon from "../../assets/Message 35.png";
import { Button_cus } from "../Button/button";
export const Hero = () => {
  const [display_mail, setdisplay_mail] = useState("block");
  const handlefocus = () => {
    setdisplay_mail("none");
  };
  const handleblur = () => {
    setdisplay_mail("block");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.text_container}>
          <h1 style={{ fontSize: "66px" }}>
            You don't have to <br />
            Fight them Alone.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ullam, consequatur tenetur suscipit odit, fuga blanditiis mollitia
            corporis sed laboriosam velit error repellendus cumque. Nostrum
            dolor tempora voluptatem quaerat autem.
          </p>
          <div className={styles.email_div}>
            <img
              style={{ display: display_mail }}
              src={mail_icon}
              alt="message"
            />
            <input
              onBlur={handleblur}
              onFocus={handlefocus}
              style={{
                height: "100%",
                width: "100%",
                border: "0px",
                backgroundColor: "var(--color-gray)",
                borderRadius: "43px",
                color: "white",
              }}
              placeholder="Enter email address"
            />{" "}
            <Button_cus text={"Let's Talk"} />
          </div>
        </div>
        <div className={styles.img_container}>
          <img
            height={"100%"}
            width={"100%"}
            className={styles.heroimg}
            src={hero_img}
            alt="hero_img"
          />
        </div>
      </div>
    </div>
  );
};
