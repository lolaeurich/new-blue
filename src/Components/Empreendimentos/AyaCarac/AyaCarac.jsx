import React, { useState } from "react";
import "./style.css";
import aya from "../../../assets/Empreendimentos/aya1.png";
import rua from "../../../assets/Empreendimentos/rua.png";
import metros from "../../../assets/Empreendimentos/metros.png";
import entrega from "../../../assets/Empreendimentos/entrega.png";

const Carac = () => {
  // Estado para controlar qual conteúdo deve ser exibido
  const [selectedContent, setSelectedContent] = useState("caracteristicas");

  // Função para mudar o conteúdo exibido
  const handleMenuClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="carac">
      {/* Menu de navegação */}
      <div className="carac-header">
        <p onClick={() => handleMenuClick("caracteristicas")}>Características</p>
        <p onClick={() => handleMenuClick("imagens")}>Imagens e plantas</p>
        <p onClick={() => handleMenuClick("diferenciais")}>Diferenciais</p>
        <p onClick={() => handleMenuClick("tour")}>Tour Virtual</p>
        <p onClick={() => handleMenuClick("localizacao")}>Localização</p>
        <p onClick={() => handleMenuClick("contato")}>Contato</p>
      </div>

      {/* Exibição do conteúdo baseado no estado `selectedContent` */}
      <div className="caracteristicas">
        {selectedContent === "caracteristicas" && (
        <><img className="caract-img" alt="" src={aya} /><div className="carac-text">
                      <h2>Aya Residences</h2>
                      <p><img alt="" src={rua} />Rua Emiliano Perneta, 260 -- Centro, CEP 80010-050</p>
                      <p><img alt="" src={metros} />De 21m² a 54m²</p>
                      <p><img alt="" src={entrega} />Previsão de entrega: <span>Outubro de 2027</span></p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
                          <br />
                          gravida tellus, at lobortis nisi. Phasellus bibendum maximus tortor ut
                          <br />
                          suscipit. In ac suscipit nibh. Sed in ligula vel nulla porta pharetra. Mauris
                          <br />
                          rhoncus dolor id tincidunt finibus. Ut augue magna, hendrerit in
                          <br />
                          consectetur in, mollis ut orci. Lorem ipsum dolor sit amet, consectetur
                          <br />
                          adipiscing elit.
                      </p>
                      <p>Maecenas sit amet magna ut metus pulvinar ultrices at vel nulla. Morbi risus
                          <br />
                          enim, pulvinar pellentesque tortor sit amet, interdum accumsan lorem. Ut
                          <br />
                          viverra, nisl aliquet tristique gravida, quam justo semper sem, at iaculis
                          <br />
                          tortor enim vel enim. Duis quis dapibus dolor.
                      </p>
                      <p>Nullam ut ornare tortor. Duis in purus tincidunt, elementum sem id,
                          <br />
                          euismod ex. Curabitur massa enim, ultricies nec ante nec, vestibulum
                          <br />
                          porttitor arcu. Pellentesque libero ipsum, iaculis quis massa ut</p>
                  </div></>
        )}

        {selectedContent === "imagens" && (
          <div className="carac-text">
            <h2>Imagens e Plantas</h2>
            <p>Conteúdo referente a imagens e plantas do projeto...</p>
          </div>
        )}

        {selectedContent === "diferenciais" && (
          <><img className="caract-img" alt="" src={aya} /><div className="carac-text">
            
            <h2>Diferenciais</h2>
            <p>&#8226; Localização estratégica;</p>
            <p>&#8226; Design sustentável;</p>
            <p>&#8226; Praça privativa;</p>
            <p>&#8226; Diversidade de unidades;</p>
            <p>&#8226; Serviços de conveniência integrados;</p>
            <p>&#8226; Foco em investimentos.</p>
          </div></>
        )}

        {selectedContent === "tour" && (
          <div className="carac-text">
            <h2>Tour Virtual</h2>
            <p>Conteúdo sobre o tour virtual...</p>
          </div>
        )}

        {selectedContent === "localizacao" && (
          <><img className="caract-img" alt="" src={aya} /><div className="carac-text">
            <h2>Localização:</h2>
            <p>O Aya Residences situa-se na Rua Emiliano 
              <br/>
              Perneta, 260, em Curitiba, uma localização 
              <br/>
              estratégica que combina o charme e a 
              <br/>
              tranquilidade de uma área residencial com a 
              <br/>
              conveniência de estar próximo ao vibrante centro 
              <br/>
              da cidade. Esta região é conhecida por sua 
              <br/>
              proximidade a diversos pontos culturais, 
              <br/>
              comerciais e de entretenimento, oferecendo aos 
              <br/>
              moradores e visitantes fácil acesso a tudo que 
              <br/>
              precisam para uma estadia prática e confortável.</p>
          </div></>
        )}

        {selectedContent === "contato" && (
          <div className="carac-text">
            <h2>Contato</h2>
            <p>Informações para contato...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carac;
