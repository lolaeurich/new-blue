/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./style.css";

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
    <div className="carousel-container">
      <button className="carousel-button left" onClick={() => handleScroll("left")}>{"<"}</button>
      <div className="carousel" ref={carouselRef}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.img} alt={item.name} className="carousel-image" />
            <p className="carousel-name">{item.name}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={() => handleScroll("right")}>{">"}</button>
    </div>
  );
};

export default Carousel;
