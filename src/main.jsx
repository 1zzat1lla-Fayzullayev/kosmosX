/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

import ScrollToTop from "./components/ScrollToTop.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentTransfer from "./pages/StudentTransfer.jsx";
import Contacts from "./pages/Contacts.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Services from "./components/Services.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Question from "./pages/Question.jsx";
import SpaceCampPrograms from "./pages/SpaceCampPrograms.jsx";
import HowtoJoin from "./pages/HowtoJoin.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import SpaceCampTrip from "./pages/SpaceCampTrip.jsx";
import SpaceWorkshops from "./pages/SpaceWorkshops.jsx";
import SpaceProjects from "./pages/SpaceProjects.jsx";
import CurriculumDevelopment from "./pages/dropdownPages/CurriculumDevelopment.jsx";
import TrainingtheEducator from "./pages/dropdownPages/TrainingtheEducator.jsx";
import AwarenessActivities from "./pages/dropdownPages/AwarenessActivities.jsx";
import BookPublishing from "./pages/dropdownPages/BookPublishing.jsx";
import OnlineEducationPlatform from "./pages/dropdownPages/OnlineEducationPlatform.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/student-transfer" exact element={<StudentTransfer />} />
          <Route path="/space-camp-programs" exact element={<SpaceCampPrograms />} />
          <Route path="/how-to-join" exact element={<HowtoJoin />} />
          <Route path="/success-stories" exact element={<SuccessStories />} />
          <Route path="/space-camp-trip" exact element={<SpaceCampTrip />} />
          <Route path="/space-workshops" exact element={<SpaceWorkshops />} />
          <Route path="/space-projects" exact element={<SpaceProjects />} />
          <Route path="/curriculum-development" exact element={<CurriculumDevelopment />} />
          <Route path="/training-the-educator" exact element={<TrainingtheEducator />} />
          <Route path="/awareness-activities" exact element={<AwarenessActivities />} />
          <Route path="/book-publishing" exact element={<BookPublishing />} />
          <Route path="/online-education-platform" exact element={<OnlineEducationPlatform />} />

          <Route path="/contacts" exact element={<Contacts />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/question" exact element={<Question />} />
        </Routes>
        <Footer />
        {/* <Up /> */}
      </HashRouter>
    </LanguageProvider>
  </ChakraProvider>
);
