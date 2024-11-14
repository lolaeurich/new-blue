/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ items }) => {

    // Função para manipular o clique, com navegação baseada no ID
    const handleItemClick = (id) => {
      switch (id) {
        case 1:
          navigate("/Aya"); // Navega para a página "/Aya"
          break;
        case 2:
          navigate("/Cena"); // Navega para a página "/Cena"
          break;
        case 3:
          navigate("/HitHome"); // Navega para a página "/HitHome"
          break;
        default:
          console.log("Ação para o item desconhecido");
      }
    };


  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Controla o índice do ponto ativo
  const itemsPerPage = 4; // Número de itens a serem exibidos por vez

  const navigate = useNavigate();

  const handleCatalogo = () => {
    navigate("/catalogo");
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth; // Tamanho da largura do carrossel
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
      const newActiveIndex = Math.floor((scrollLeft / maxScrollLeft) * (items.length / itemsPerPage));
      setActiveIndex(newActiveIndex); // Atualiza o índice do ponto ativo
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", updateProgress);
      updateProgress(); // Inicia o progresso

      return () => {
        carouselElement.removeEventListener("scroll", updateProgress);
      };
    }
  }, [items.length]);

  return (
    <main>
      <header className="carousel-header">
        <p className="carousel-title">Conheça os projetos</p>
        <button className="view-projects-button" onClick={handleCatalogo}>Ver todos os projetos &rarr;</button>
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
          <div key={item.id} className="carousel-item"  onClick={() => handleItemClick(item.id)}>
            <img src={item.img} alt={item.name} className="carousel-image" style={{cursor: "pointer"}}/>
            <p className="carousel-name">{item.name}</p>
            
            {/* Informações extras */}
            <div className="extra-info">
              <p>{item.address}</p>
              <p>{item.squareMeters} m²</p>
              <button className="btn-conheca">Conheça &rarr;</button>
            </div>
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

      {/* Progress Bar com 3 Pontos */}
      <div className="progress-bar">
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
          <span
            key={index}
            className={`progress-dot ${index === activeIndex ? "active" : ""}`} // Ativa o ponto conforme a rolagem
          />
        ))}
      </div>
    </main>
  );
};

export default Carousel;
