import React, { useState } from "react";
import "./style.css";
import um from "../../../assets/Aya/1.jpg";
import dois from "../../../assets/Aya/2.jpg";
import tres from "../../../assets/Aya/3.jpg";
import quatro from "../../../assets/Aya/4.jpg";
import cinco from "../../../assets/Aya/5.jpg";
import seis from "../../../assets/Aya/6.jpg";
import sete from "../../../assets/Aya/7.jpg";
import oito from "../../../assets/Aya/8.jpg";

function AyaCarousel() {
  // Lista de imagens do carousel
  const images = [um, dois, tres, quatro, cinco, seis, sete, oito];

  // Estado para controlar qual imagem está sendo exibida
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Vai para a próxima, e volta para a primeira quando chega no final
  };

  // Função para ir para a imagem anterior
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1) // Vai para a imagem anterior, e volta para a última quando chega na primeira
    );
  };

  return (
    <section className="section-aya-carousel">
      <div className="aya-carousel-header">
        <p>Galeria</p>
        <p>Plantas</p>
        <p>Obras</p>
      </div>

      <div className="aya-galeria">
        {/* Botão para imagem anterior */}
        <button className="carousel-arrow-aya prev" onClick={prevImage}>
          &#10094;
        </button>

        {/* Exibição da imagem atual */}
        <div className="carousel-image-aya">
          <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
        </div>

        {/* Botão para próxima imagem */}
        <button className="carousel-arrow-aya next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default AyaCarousel;
