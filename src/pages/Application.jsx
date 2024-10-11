/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Helmet from "react-helmet"; // Import Helmet
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const Application = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const metaDescription = "EduAgency offers comprehensive assistance for students navigating the application process for educational institutions in Turkey and Uzbekistan. From document preparation to personalized consultancy, we guide you through every step of your academic journey.";

  const metaKeywords = "application assistance, education consultancy, Turkey education, Uzbekistan education, YTB scholarships, TYS exam consultancy, student guidance, document preparation, academic consulting";

  return (
    <>
      <Helmet>
        <title>{getText("headerSwiperTitle1")} | EduAgency</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href="https://yourwebsite.com/application" />
      </Helmet>

      <div className="service-pages">
        <div className="description container">
          <h1>{getText("headerSwiperTitle1")}</h1>
          <div>
            <h2>{getText("ApplicationYardamTitle")}</h2>
            <ul style={{ marginTop: "20px" }}>
              <li>
                <p>{getText("ApplicationYardamDesc1")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc2")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc3")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc4")}</p>
              </li>
              {/* Uncomment if needed
              <li>
                <p>{getText("ApplicationYardamDesc5")}</p>
              </li>
              <li>
                <p>{getText("ApplicationYardamDesc6")}</p>
              </li>
              */}
            </ul>
          </div>
          <h2>{getText("ApplicationProceduresBosqich")}</h2>
          <ul>
            <li style={{ marginTop: "20px" }}>
              <span> {getText("ApplicationProceduresSpanDesc1")} </span>
            </li>
            <li>
              <span> {getText("ApplicationProceduresSpanDesc2")} </span>
            </li>
            <li>
              <span> {getText("ApplicationProceduresSpanDesc3")} </span>
            </li>
            <li>
              <span> {getText("ApplicationProceduresSpanDesc4")} </span>
            </li>
          </ul>
        </div>
      </div>

      <Getintouch />
    </>
  );
};

export default Application;
