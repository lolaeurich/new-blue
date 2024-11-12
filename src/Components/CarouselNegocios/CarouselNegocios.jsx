import { useRef, useState, useEffect } from "react";
import "./style.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import negocios1 from "../../assets/negocios1.png";
import negocios2 from "../../assets/negocios2.png";

const CarouselNegocios = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Controle de qual item está ativo

  // Itens do carrossel
  const items = [
    { id: 1, img: negocios1 },
    { id: 2, img: negocios2 },
  ];

  // Função para controlar a navegação do carrossel
  const handleScroll = (direction) => {
    let newIndex = activeIndex;
    if (direction === "left") {
      newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    } else if (direction === "right") {
      newIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    }
    setActiveIndex(newIndex);
  };

  // Efeito para rolar o carrossel para o item ativo
  useEffect(() => {
    if (carouselRef.current) {
      const activeItem = carouselRef.current.children[activeIndex];
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [activeIndex]);

  // Função para renderizar os pontos (dots)
  const renderDots = () => {
    return items.map((_, index) => (
      <div
        key={index}
        className={`dot ${index === activeIndex ? "active" : ""}`}
      />
    ));
  };

  return (
    <main className="negocios-carousel">
      <h2 className="negocios-h2">Conheça alguns projetos do Grupo Blue</h2>
      <div className="neg-carousel-container">
        <button
          className="neg-carousel-button left"
          onClick={() => handleScroll("left")}
        >
          <IoIosArrowBack />
        </button>
        <div className="neg-carousel" ref={carouselRef}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`neg-carousel-item ${index === activeIndex ? "active" : ""}`}
            >
              <img
                src={item.img}
                alt={`Imagem ${item.id}`}
                className="neg-carousel-image"
              />
            </div>
          ))}
        </div>
        <button
          className="neg-carousel-button right"
          onClick={() => handleScroll("right")}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className="neg-dots-container">
        {renderDots()}
      </div>
    </main>
  );
};

export default CarouselNegocios;
