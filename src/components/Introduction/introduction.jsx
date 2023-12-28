import React from "react";
import styles from "./introduction.module.css";
import gift_icon from "../../assets/gift.png";
import { Button_cus } from "../Button/button";
export const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner_wrapper}>
        <div className={styles.flex_div}>
          <div className={styles.left}>
            <h1>
              Let's Introduce
              <br />
              Ourself
            </h1>
          </div>

          <div style={{ height: "8.8rem", width: "0.5px", opacity: "0.2" }}>
            <hr
              style={{
                height: "100%",
                width: "100%",
                border: "none",
                borderRight: "0.5px solid white",
              }}
            />
          </div>

          <div className={styles.right}>
            <h4>Criminal lawyer</h4>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              officiis odio voluptatem id, dicta eveniet earum repellendus.
              Ipsum ad iste repellat, exercitationem provident beatae eaque
              dolores vero, dolorem dolore neque!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.choose_div}>
        <h1>Why choose us ?</h1>
        <div className={styles.pillar}>
          <div className={styles.each_pillar}>
            <img src={gift_icon} alt="gift" />
            <h3>98% Success Rate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              commodi facere tempora nobis recusandae. Modi corrupti cum
              voluptas aperiam, est voluptates maxime ipsam autem ea, doloribus
              nisi sapiente commodi a?
            </p>
            <Button_cus text={"Read More"} />
          </div>
          <div className={`${styles.each_pillar} ${styles.middle_pillar}`}>
            <img src={gift_icon} alt="gift" />
            <h3>100% Success Rate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              commodi facere tempora nobis recusandae. Modi corrupti cum
              voluptas aperiam, est voluptates maxime ipsam autem ea, doloribus
              nisi sapiente commodi a?
            </p>
            <Button_cus text={"Read More"} />
          </div>
          <div className={styles.each_pillar}>
            <img src={gift_icon} alt="gift" />
            <h3>100% Success Rate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              commodi facere tempora nobis recusandae. Modi corrupti cum
              voluptas aperiam, est voluptates maxime ipsam autem ea, doloribus
              nisi sapiente commodi a?
            </p>
            <Button_cus text={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
};
