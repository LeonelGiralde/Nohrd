import { useEffect, useState } from 'react';
import '../styles/Carrusel.css';

const slides = [
  {
    id: 1,
    title: 'Calidad en cereales para el mercado global',
    subtitle: 'Soluciones confiables, producción sostenida y estándares de excelencia.',
    buttonText: 'Ver productos',
    buttonLink: '#productos',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'Presencia internacional y visión de crecimiento',
    subtitle: 'Conectamos producción, logística y distribución en distintos mercados.',
    buttonText: 'Nuestra red',
    buttonLink: '#red-global',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Compromiso con la excelencia y la innovación',
    subtitle: 'Trabajamos con foco en eficiencia, trazabilidad y mejora continua.',
    buttonText: 'Conocé la empresa',
    buttonLink: '#empresa',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80',
  },
];

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="carousel">
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <article
            key={slide.id}
            className="carousel__slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel__overlay" />

            <div className="carousel__content">
              <p className="carousel__eyebrow">NOHRD CEREALES</p>
              <h1 className="carousel__title">{slide.title}</h1>
              <p className="carousel__subtitle">{slide.subtitle}</p>

              <a href={slide.buttonLink} className="carousel__button">
                {slide.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={goToPrev}
        aria-label="Slide anterior"
      >
        ‹
      </button>

      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={goToNext}
        aria-label="Siguiente slide"
      >
        ›
      </button>

      <div className="carousel__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carrusel;