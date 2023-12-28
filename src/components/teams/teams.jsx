import React from "react";
import styles from "./teams.module.css";
import { Eachteammember } from "./eachteammember";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";
import member6 from "../../assets/member6.png";

export const Teams = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.innerWrapper}>
          <h1 style={{ textAlign: "center" }}>Our Team</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "5rem",
              gap: "4rem",
            }}
          >
            <div className={styles.team_div}>
              <Eachteammember
                name={"Danial Def"}
                cases={"301 Cases"}
                icon={member1}
              />
              <Eachteammember
                name={"Sanfole"}
                cases={"850 Cases"}
                icon={member2}
                bgcolor={true}
              />
              <Eachteammember
                name={"Cesforila"}
                cases={"470 Cases"}
                icon={member3}
              />
            </div>
            <div className={styles.team_div}>
              <Eachteammember
                name={"Colleen"}
                cases={"180 Cases"}
                icon={member4}
              />
              <Eachteammember
                name={"Haldone"}
                cases={"212 Cases"}
                icon={member5}
              />
              <Eachteammember
                name={"Nik Jeo"}
                cases={"350 Cases"}
                icon={member6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
