/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./style.css";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
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
    </section>
  );
};

export default Carousel;
