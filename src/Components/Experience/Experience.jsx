import React from "react";
import "./style.css";
import icon1 from "../../assets/Experience/icon1.png";
import icon2 from "../../assets/Experience/icon2.png";
import icon3 from "../../assets/Experience/icon3.png";
import icon4 from "../../assets/Experience/icon4.png";
import icon5 from "../../assets/Experience/icon5.png";
import icon6 from "../../assets/Experience/icon6.png";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-text">
        <div className="container">
          <h2>
            <strong>Mais de 16 anos de experiência</strong> no mercado
            imobiliário
          </h2>
          <p>
            O que nos move é a busca insaciável por inovação e a certeza da
            excelência.
          </p>
        </div>

        <ul>
          <li>
            <img alt="" src={icon1} />
            Solidez
          </li>
          <li>
            <img alt="" src={icon2} />
            Diligência profunda
          </li>
          <li>
            <img alt="" src={icon3} />
            Histórico impecável
          </li>
          <li>
            <img alt="" src={icon4} />
            Viabilidade financeira
          </li>
          <li>
            <img alt="" src={icon5} />
            Controladoria minuciosa
          </li>
          <li>
            <img alt="" src={icon6} />
            Equipe de alta performance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
