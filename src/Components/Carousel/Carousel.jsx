/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import "./style.css";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateProgress = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const newProgress = (scrollLeft / maxScrollLeft) * 100;
      setProgress(newProgress);
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", updateProgress);
      updateProgress();

      return () => {
        carouselElement.removeEventListener("scroll", updateProgress);
      };
    }
  }, []);

  return (
    <main>
      <header>
        <p>Projetos</p>
        <GiSettingsKnobs style={{ rotate: "90deg" }} />
      </header>
      <div className="carousel-container">
        <button
          className="carousel-button left"
          onClick={() => handleScroll("left")}
        >
          <IoIosArrowBack />
        </button>
        <div className="carousel" ref={carouselRef}>
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.img} alt={item.name} className="carousel-image" />
              <p className="carousel-name">{item.name}</p>
            </div>
          ))}
        </div>
        <button
          className="carousel-button right"
          onClick={() => handleScroll("right")}
        >
          <IoIosArrowForward />
        </button>
      </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
    </main>
  );
};

export default Carousel;
