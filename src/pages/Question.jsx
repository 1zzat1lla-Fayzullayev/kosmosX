/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { getText } from "../locales";
import AccordionUI from "../ui/accordion/accordionUi";
import Helmet from "../components/Helmet";

function Question() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
    
  return (
    <div style={{ marginTop: "200px" }}>
      <Helmet
        title={getText("questionPageTitle") || "Frequently Asked Questions"}
        description={getText("questionPageDesc") || "Find answers to your frequently asked questions."}
        link="/question"
        keywords="faq, questions, answers, help"
      />
      
      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>{getText("questionTitle")}</h2>
        <AccordionUI />
      </div>
    </div>
  );
}

export default Question;
