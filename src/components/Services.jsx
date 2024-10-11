/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Getintouch from "./Getintouch";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import Helmet from "../components/Helmet";
import NewCards from "./NewCards";

const Services = () => {
  const navigate = useNavigate();
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <>
      <Helmet
        title={getText("ServicesPageTitle") || "Our Services"}
        description={
          getText("ServicesPageDesc") ||
          "Explore our range of services to assist you."
        }
        link="/services"
        keywords="services, education, consulting, university"
      />

      <div style={{marginTop: "150px"}}>
        <NewCards />
      </div>
    </>
  );
};

export default Services;
