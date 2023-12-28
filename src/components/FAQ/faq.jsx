import React from "react";
import styles from "./faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
export const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <div className={styles.faq}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <h1 style={{ paddingBottom: "2rem" }}>FAQ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              amet itaque, iusto est.
            </p>
          </div>
          <div className={styles.accord}>
            <h4 style={{ marginBottom: "2rem" }}>
              Do I need a personal injury report?
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              amet officiis quibusdam! Dolorum enim pariatur cumque laboriosam
              libero ullam quasi ad veritatis fugiat, molestias similique amet
              doloribus nulla porro atque?
            </p>
            <div className={styles.acc_div}>
              <Accordion
                sx={{
                  marginBottom: "3rem",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "var(--color-primary)",
                        borderRadius: "50%",
                        height: "2rem",
                        width: "2rem",
                      }}
                    >
                      <AddIcon />
                    </div>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "var(--color-gray)",
                    color: "white",
                  }}
                >
                  <Typography>How much is my case worth?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "var(--color-gray)" }}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  marginBottom: "3rem",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "var(--color-primary)",
                        borderRadius: "50%",
                        height: "2rem",
                        width: "2rem",
                      }}
                    >
                      <AddIcon />
                    </div>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "var(--color-gray)",
                    color: "white",
                  }}
                >
                  <Typography>
                    What should I do right after car accidect
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "var(--color-gray)" }}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "var(--color-primary)",
                        borderRadius: "50%",
                        height: "2rem",
                        width: "2rem",
                      }}
                    >
                      <AddIcon />
                    </div>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "var(--color-gray)",
                    color: "white",
                  }}
                >
                  <Typography>How much is my case worth?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "var(--color-gray)" }}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
