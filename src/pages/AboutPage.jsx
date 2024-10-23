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
        {/* <h1 className="about-title">
          Uzay Kampına Öğrenci Gönderen Tek Yetkili Firma
        </h1> */}
        <p className="about-description">
          KosmosX, Özbekistan’da uzay ve havacılık alanında faaliyet gösteren lider bir eğitim ve proje firması olarak, gençleri ve yetişkinleri uzay bilimlerine kazandırma misyonuyla yola çıkmıştır. Türkiye’deki ünlü uzay kampının Özbekistan’daki exclusive distribütörü olarak, ülkemizde uzay eğitimine yönelik yenilikçi çözümler sunmaktayız.
        </p>
        <p className="about-description">
          Sunduğumuz eğitim programları ve projeler, dünya çapında tanınan üniversiteler, uzay teknolojileri alanında önde gelen firmalar ve uzman eğitimcilerle yapılan güçlü ortaklıklara dayanmaktadır. Uzay kampı organizasyonlarımızdan atölye kurulumlarına, müfredat geliştirmeden eğitimcilerin eğitimi ve farkındalık etkinliklerine kadar uzanan geniş hizmet yelpazemizle, uzay bilimlerini daha erişilebilir ve anlaşılır hale getiriyoruz.
        </p>
        <p className="about-description">
          KosmosX olarak, geleceğin bilim insanlarını ve uzay kaşiflerini yetiştirme vizyonuyla her yaştan katılımcıya ilham verici ve interaktif bir öğrenme deneyimi sunmayı hedefliyoruz.        </p>

        {/* <h2 className="team-title">Ekibimiz ve Başarı Hikayeleri</h2>
        <p className="team-description">
          Ekibimiz, çeşitli alanlarda uzmanlaşmış profesyonellerden oluşmaktadır. Uzay kampına gönderdiğimiz öğrencilerin başarı hikayeleri ile doluyuz. Bizimle birlikte bu heyecan verici yolculuğa çıkmaya hazır olun!
        </p> */}

        <Getintouch />
        <MobileAboutPage />
      </div>
    </>
  );
}

export default AboutPage;
