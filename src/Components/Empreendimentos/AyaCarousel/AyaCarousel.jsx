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

// Definir imagens para cada seção
const galerias = [um, dois, tres, quatro, cinco, seis, sete, oito]; // Galeria
const plantas = [um]; // Exemplo para plantas
const obras = [um]; // Exemplo para obras

function AyaCarousel() {
  // Estado para controlar qual imagem está sendo exibida
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado para controlar qual botão do menu está ativo
  const [activeTab, setActiveTab] = useState("galeria");

  // Função para ir para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % getImages().length); // Vai para a próxima, e volta para a primeira quando chega no final
  };

  // Função para ir para a imagem anterior
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? getImages().length - 1 : prevIndex - 1) // Vai para a imagem anterior, e volta para a última quando chega na primeira
    );
  };

  // Função para obter as imagens com base na aba ativa
  const getImages = () => {
    if (activeTab === "galeria") {
      return galerias;
    } else if (activeTab === "plantas") {
      return plantas;
    } else {
      return obras;
    }
  };

  // Função para mudar a aba e resetar o índice da imagem
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0); // Resetar para a primeira imagem ao trocar de aba
  };

  return (
    <section className="section-aya-carousel">
      <div className="aya-carousel-header">
        <p
          onClick={() => handleTabClick("galeria")}
          className={activeTab === "galeria" ? "active" : ""}
        >
          Galeria
        </p>
        <p
          onClick={() => handleTabClick("plantas")}
          className={activeTab === "plantas" ? "active" : ""}
        >
          Plantas
        </p>
        <p
          onClick={() => handleTabClick("obras")}
          className={activeTab === "obras" ? "active" : ""}
        >
          Obras
        </p>
      </div>

      <div className="aya-galeria">
        {/* Botão para imagem anterior */}
        <button className="carousel-arrow-aya prev" onClick={prevImage}>
          &#10094;
        </button>

        {/* Exibição da imagem atual */}
        <div className="carousel-image-aya">
          <img src={getImages()[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
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
