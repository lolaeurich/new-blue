import React, { useState } from "react";
import "./style.css";

const Avanco = () => {
  const [percentage, setPercentage] = useState(380); // Exemplo de porcentagem

  return (
    <div className="avanco">
      <div className="avanco-header">
        <h3>Estágio geral</h3>
        <p>Última atualização: 23/05/2024</p>
      </div>

      {/* Barra de progresso */}
      <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
        <div className="progress-bar-background"></div>
      </div>

      <div className="dados">
        <div className="dados1">
            <p>Escavação</p>
            <h3>100%</h3>
        </div>

        <div className="dados1">
            <p>Fundação</p>
            <h3>100%</h3>
        </div>

        <div className="dados1">
            <p>Estrutura</p>
            <h3>100%</h3>
        </div>

        <div className="dados1">
            <p>Alvenaria</p>
            <h3>100%</h3>
        </div>

        <div className="dados1">
            <p>Acabamento externo</p>
            <h3>100%</h3>
        </div>

        <div className="dados1">
            <p>Acabamento interno</p>
            <h3>90%</h3>
        </div>
      </div>
    </div>
  );
};

export default Avanco;
