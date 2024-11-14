import React, { useState } from 'react';
import "./style.css";
import rec from "../../assets/reconhecimento.png";
import rec1 from "../../assets/rec1.png";
import rec2 from "../../assets/rec2.png";
import rec3 from "../../assets/rec3.png";
import rec4 from "../../assets/rec4.png";

const Reconhecimento = () => {
  const images = [rec1, rec2, rec3, rec4]; // Imagens do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para a próxima "página" de imagens
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para ir para a página anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="reconhecimento">
      <img className="rec-img" alt="Reconhecimento" src={rec} />

      <div className="carousel-rec">
        <button className="carousel-rec-button prev" onClick={prevImage}>
          &#10094;
        </button>
        
        {/* Carrossel das imagens */}
        <div className="carousel-rec-container">
          <div
            className="carousel-rec-images"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move o conjunto de imagens
              transition: 'transform 0.5s ease', // Suaviza a transição
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="carousel-rec-image"
                src={image}
                alt={`Imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button className="carousel-rec-button next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Reconhecimento;
