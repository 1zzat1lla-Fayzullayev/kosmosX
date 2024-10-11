/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Helmet from "react-helmet"; 
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Getintouch from "../components/Getintouch";

const StudentTransfer = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const metaDescription = "EduAgency offers expert guidance for students seeking to transfer to educational institutions in Turkey and Uzbekistan. Our services include application support, document preparation, and personalized orientation to ensure a smooth transition.";

  const metaKeywords = "student transfer, education consultancy, Turkey education, Uzbekistan education, application support, document preparation, academic guidance, orientation programs, EduAgency";

  return (
    <>
      <Helmet>
        <title>{getText("headerSwiperTitle2")} | EduAgency</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href="https://yourwebsite.com/student-transfer" />
      </Helmet>

      <div className="service-pages">
        <div className="description container">
          <h1>{getText("headerSwiperTitle2")}</h1>
          <p>
            <span>{getText("StudentTransferSpanDesc1")}</span>
            {getText("StudentTransferDesc1")}
          </p>
          <p>
            <span>{getText("StudentTransferSpanDesc2")}</span>
            {getText("StudentTransferDesc2")}
          </p>
          <p>
            <span>{getText("StudentTransferSpanDesc3")}</span>
            {getText("StudentTransferDesc3")}
          </p>
          <p>
            <span>{getText("StudentTransferSpanDesc4")}</span>
            {getText("StudentTransferDesc4")}
          </p>
        </div>
      </div>

      <Getintouch />
    </>
  );
};

export default StudentTransfer;
