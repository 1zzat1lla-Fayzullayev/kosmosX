/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "../sass/swiper.scss";

// eslint-disable-next-line react/prop-types
const Swiper = ({ children, autoplayInterval = 40000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);
  const swiperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    autoplayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const intervalId = setInterval(play, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [autoplayInterval]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX > 50) {
      handlePrev();
    } else if (translateX < -50) {
      handleNext();
    }
    setTranslateX(0);
  };

  return (
    <div
      className="swiper-container"
      ref={swiperRef}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="swiper-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div className="swiper-slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="swiper-button prev" onClick={handlePrev}>
        <img src="/img/arrow-left.png" alt="" />
      </button>
      <button className="swiper-button next" onClick={handleNext}>
        <img src="/img/arrow-right.png" alt="" />
      </button>
      <div className="swiper-dots">
        {children.map((_, index) => (
          <span
            key={index}
            className={`swiper-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
