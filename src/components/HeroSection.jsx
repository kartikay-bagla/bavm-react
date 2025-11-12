import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      quote: "Excellence in Legal Representation",
      subtext: "Trusted Counsel for Your Legal Needs"
    },
    {
      quote: "Protecting Your Rights, Defending Your Future",
      subtext: "Experienced Attorneys, Proven Results"
    },
    {
      quote: "Your Success is Our Priority",
      subtext: "Strategic Legal Solutions Since 1995"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-content">
              <h1 className="hero-quote">{slide.quote}</h1>
              <p className="hero-subtext">{slide.subtext}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
