/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "../sass/about.scss";
import Getintouch from "../components/Getintouch";
import MobileAboutPage from "./MobileAboutPage";
import { LanguageContext } from "../context/LanguageContext";
import Helmet from "../components/Helmet";

function AboutPage() {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      <Helmet title="Hakkında" />

      <div className="about-page container">
        <h1 className="about-title">
          Uzay Kampına Öğrenci Gönderen Tek Yetkili Firma
        </h1>
        <p className="about-description">
          Firmamız, Özbekistan’dan Türkiye’deki uzay kampına öğrenci gönderen tek yetkili ajans olup, öğrencilere hayal ettikleri uzay keşfi deneyimini sunmayı hedefliyor. Yıllardır edindiğimiz tecrübe ile hem akademik hem de eğlence dolu bir deneyim yaşatıyoruz. Öğrencilerin bilim ve teknolojiye olan ilgisini artırarak, geleceğin bilim insanlarını yetiştirmeyi amaçlıyoruz.
        </p>

        <h2 className="team-title">Ekibimiz ve Başarı Hikayeleri</h2>
        <p className="team-description">
          Ekibimiz, çeşitli alanlarda uzmanlaşmış profesyonellerden oluşmaktadır. Uzay kampına gönderdiğimiz öğrencilerin başarı hikayeleri ile doluyuz. Bizimle birlikte bu heyecan verici yolculuğa çıkmaya hazır olun!
        </p>

        <Getintouch />
        <MobileAboutPage />
      </div>
    </>
  );
}

export default AboutPage;
