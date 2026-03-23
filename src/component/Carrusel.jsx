import { useEffect, useState } from "react";
import "../styles/Carrusel.css";
import translations from "../translations";

import img1 from "../img/img1.avif";
import img2 from "../img/img2.avif";
import img3 from "../img/img3.avif";

const images = [img1, img2, img3];

function Carrusel({ language = "es" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = translations[language].carousel;
  const slides = t.slides;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <article
            key={index}
            className="carousel__slide"
            style={{ backgroundImage: `url(${images[index]})` }}
          >
            <div className="carousel__overlay" />

            <div className="carousel__content">
              <p className="carousel__eyebrow">{t.eyebrow}</p>

              <h1 className="carousel__title">{slide.title}</h1>
              <p className="carousel__subtitle">{slide.subtitle}</p>

              <a href={slide.buttonLink} className="carousel__button">
                {slide.button}
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={goToPrev}
        aria-label={language === "es" ? "Slide anterior" : "Previous slide"}
      >
        ‹
      </button>

      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={goToNext}
        aria-label={language === "es" ? "Siguiente slide" : "Next slide"}
      >
        ›
      </button>

      <div className="carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel__dot ${
              index === currentIndex ? "carousel__dot--active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carrusel;