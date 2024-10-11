/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Header from "./components/Header";
import Getintouch from "./components/Getintouch";
import ReactGA from "react-ga4";
import Helmet from "./components/Helmet";
import NewCards from "./components/NewCards";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-KSW67VFGP9");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet
        title="Home Page"
        description="Welcome to EduAgency! Your gateway to studying in Turkey and Uzbekistan."
        link="/"
        keywords="eduagency, study in Turkey, study in Uzbekistan"
      />
      <Header />
      {/* <NewCards /> */}
      <Getintouch />
    </>
  );
};

export default App;
