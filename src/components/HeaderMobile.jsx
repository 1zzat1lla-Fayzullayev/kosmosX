/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { getText } from "../locales";
import { LanguageContext } from "../context/LanguageContext";
import { useContext, useEffect, useRef, useState } from "react";
import "../sass/swiper.scss";
import useHeaderData from "../data/headerData";

function HeaderMobile() {
  const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const autoplayRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [isActive, setIsActive] = useState(true);

  const slides = useHeaderData();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let countdownInterval = null;

    if (isActive && seconds > 0) {
      countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        goToNextSlide();
      }, 4000);
    } else {
      clearInterval(countdownInterval);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isActive, seconds]);

  const goToNextSlide = () => {
    if (slides.length - 1 > currentIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setTranslateX(currentX - startX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX > 50) {
      goToPrevSlide();
    } else if (translateX < -50) {
      goToNextSlide();
    }
    setTranslateX(0);
  };

  if (!isMobile) return null;

  return (
    <div
      className="swiper-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="swiper-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="swiper-slide" key={index}>
            <div className="container header-mobile">
              <img
                src={
                  window.innerWidth <= 1200
                    ? slide.mobBgImage || slide.bgImage
                    : slide.bgImage
                }
                alt="404"
                className="mobile-header-bg"
              />
              <div className="mobile-header-texts">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="myBtn">
                  <button>
                    <Link
                      to={slide.headerLink}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <p style={{ color: "white" }}>{getText("headerButton1")}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        {/* SVG content */}
                      </svg>
                    </Link>
                  </button>
                  <button>
                    <a
                      href="tel:+998334691101"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <p style={{ color: "white" }}>{getText("headerButton2")}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        {/* SVG content */}
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`swiper-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeaderMobile;
