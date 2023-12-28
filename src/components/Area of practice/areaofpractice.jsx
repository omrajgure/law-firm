import React from "react";
import styles from "./areaofpractice.module.css";
import businesslaw from "../../assets/bussenes_law.png";
import partnershiplaw from "../../assets/partnership_law.png";
import business_2 from "../../assets/business_2.png";
import realestate from "../../assets/realestate.png";
import landlord from "../../assets/landlord.png";
import elderabuse from "../../assets/elderabuse.png";
export const Areaofpractice = () => {
  return (
    <div className={styles.wrapper}>
      <h2 style={{ textAlign: "center", fontSize: "54px" }}>
        Area of Practices
      </h2>

      <div className={styles.img_wrapper}>
        <div>
          <div className={styles.img1Wrapper}>
            <div className={styles.eachimgdiv}>
              <img src={businesslaw} alt="businesslaw" />
              <p className={styles.img_text}>BUSINESS LAW</p>
            </div>
            <div className={styles.eachimgdiv}>
              <img src={partnershiplaw} alt="partnershiplaw" />
              <p style={{ left: "25%" }} className={styles.img_text}>
                Partnership LAW
              </p>
            </div>
          </div>
          <div className={styles.img1Wrapper}>
            <div className={styles.eachimgdiv}>
              <img src={realestate} alt="realestate" />
              <p style={{ left: "25%" }} className={styles.img_text}>
                REAL ESTATE LAW
              </p>
            </div>
            <div className={styles.eachimgdiv}>
              <img src={business_2} alt="business_2" />
              <p className={styles.img_text}>BUSINESS LAW</p>
            </div>
          </div>
          <div className={styles.img1Wrapper}>
            <div className={styles.eachimgdiv}>
              <img src={landlord} alt="landlord" />
              <p style={{ left: "35%" }} className={styles.img_text}>
                LANDLORD DISPUTES
              </p>
            </div>
            <div className={styles.eachimgdiv}>
              <img src={elderabuse} alt="elderabuse" />
              <p style={{ left: "30%" }} className={styles.img_text}>
                ELDER ABUSE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
