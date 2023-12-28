import React from "react";
import styles from "./happyclients.module.css";
import user1 from "../../assets/user_1.png";
import user2 from "../../assets/user_2.png";
import user3 from "../../assets/user_3.png";
import { Leftbutton } from "./leftbutton/leftbutton";
import { Rightbutton } from "./rightbutton/rightbutton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export const HappyClients = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.inner_wrapper}>
          <div className={styles.heading_button}>
            <h1 style={{ lineHeight: "77px", fontSize: "54px" }}>
              What says our
              <br /> happy Clients
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Leftbutton /> <Rightbutton />
            </div>
          </div>
          <div>
            <Swiper
              style={{ padding: "0px 20px" }}
              initialSlide={0}
              modules={[Navigation]}
              spaceBetween={40}
              allowTouchMove
              slidesPerView={"auto"}
              breakpoints={{
                840: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1210: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.each_pillar}>
                  <img src={user1} alt="icon" />
                  <h3>Jane Cooper</h3>
                  <span>Ceo of Hunt</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga commodi facere tempora nobis recusandae. Modi corrupti
                    cum voluptas aperiam, est voluptates maxime ipsam autem ea,
                    doloribus nisi sapiente commodi a?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.each_pillar} ${styles.middle_pillar}`}
                >
                  <img src={user3} alt="icon" />
                  <h3>Devon Lane</h3>
                  <span>Ceo of Hunt</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga commodi facere tempora nobis recusandae. Modi corrupti
                    cum voluptas aperiam, est voluptates maxime ipsam autem ea,
                    doloribus nisi sapiente commodi a?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.each_pillar}>
                  <img src={user2} alt="icon" />
                  <h3>Robert Fox</h3>
                  <span>Ceo of Hunt</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga commodi facere tempora nobis recusandae. Modi corrupti
                    cum voluptas aperiam, est voluptates maxime ipsam autem ea,
                    doloribus nisi sapiente commodi a?
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
