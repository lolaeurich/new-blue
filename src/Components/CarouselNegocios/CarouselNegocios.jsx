import { useRef, useState, useEffect } from "react";
import "./style.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import negocios1 from "../../assets/negocios1.png";
import negocios2 from "../../assets/negocios2.png";


const CarouselNegocios = () => {
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

  // Definir imagens e nomes diretamente no código
  const items = [
    { id: 1, img: negocios1,},
    { id: 2, img: negocios2},
    { id: 3, img: negocios1 },
  ];

  return (
    <main className="negocios-carousel">
        <h2 className="negocios-h2">Conheça alguns projetos do Grupo Blue</h2>
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
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </main>
  );
};

export default CarouselNegocios;
