/* eslint-disable no-unused-vars */
import React from "react";
import { getText } from "../locales";

function AboutText() {
  return (
    <>
      <div className="about-texts">
        <h2>EduAgency</h2>

        <div>
          <p>{getText("AboutPageTextP1")}</p>

          <p>{getText("AboutPageTextP2")}</p>

          <p>{getText("AboutPageTextP3")}</p>

          <p>{getText("AboutPageTextP4")}</p>
        </div>

        <h4 style={{fontSize: "1.85rem"}}>{getText("AboutPageTextUlFirst")}</h4>
        <p>{getText("AboutPageTextUlDesc")}</p>

        <h3>{getText("AboutPageTextUlHeading")}</h3>
        <ul style={{ marginTop: "20px", padding: "0" }}>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp1")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp2")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp3")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp4")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp5")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp6")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp7")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp8")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
          <li>
            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {getText("AboutPageTextUlp9")}{" "}
              <img src="/img/check.png" alt="" style={{ width: "25px" }} />
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutText;
