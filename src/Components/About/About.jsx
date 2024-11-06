import React from "react";
import "./style.css";
import about from "../../assets/About/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-details">
        <div className="container-relative">
          <h3>Para fazer mais</h3>
          <h1>projetos de sucesso</h1>
          <p>
            Na Blue, transformamos ideias em realidade. Com um histórico sólido,
            entregamos projetos de alta qualidade para todas as fases da vida.
            Confiança, expertise e resultados concretos são nossos compromissos.
          </p>
          <button>Sobre nós</button>
        </div>
        <div className="decorate"></div>
      </div>
      <main className="about-main">
        <div className="about-details2">
          <div className="container-relative">
            <h3>Para fazer mais</h3>
            <h1>projetos de sucesso</h1>
            <p>
              Na Blue, transformamos ideias em realidade. Com um histórico
              sólido, entregamos projetos de alta qualidade para todas as fases
              da vida. Confiança, expertise e resultados concretos são nossos
              compromissos.
            </p>
            <button>Sobre nós</button>
          </div>
          <div className="decorate"></div>
        </div>
        <div className="about-numbers">
          <div className="info">
            <h3>+ de 15 mil</h3>
            <p>unidades</p>
          </div>
          <div className="info">
            <h3>+ de 1 milhão</h3>
            <p>de metros quadrados</p>
          </div>
          <div className="info">
            <h3>+ de 1,4 bilhões</h3>
            <p>de VGV no triênio</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
