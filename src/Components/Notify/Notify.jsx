import "./style.css";
import { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "../../assets/Notify/notify.png";

const Notify = () => {
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const items = [
    {
      id: 1,
      title: "5 dicas para investir em imóveis",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
    {
      id: 2,
      title: "5 dicas para investir em imóveis",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
    {
      id: 2,
      title: "5 dicas para investir em imóveis",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
    {
      id: 2,
      title: "5 dicas para investir em imóveis",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
    {
      id: 2,
      title: "5 dicas para investir em imóveis",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
  ];

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
    <main className="notify">
      <header>
        <p>Blue na mídia</p>
        <button>
          Ver mais notícias <FaArrowRight />
        </button>
      </header>
      <div className="carousel-container">
        <button
          className="carousel-button left"
          onClick={() => handleScroll("left")}
        ></button>
        <div className="carousel" ref={carouselRef}>
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.img} alt={item.name} className="carousel-image" />
              <h3 className="carousel-title">{item.title}</h3>
              <p className="carousel-description">{item.description}</p>
              <a href="#" className="carousel-link">
                Ver notícia <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
        <button
          className="carousel-button right"
          onClick={() => handleScroll("right")}
        ></button>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </main>
  );
};

export default Notify;
