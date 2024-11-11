import "./style.css";
import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import aya from "../../assets/Catalogo/ayay.png";
import cena from "../../assets/Catalogo/cena.png";
import hit from "../../assets/Catalogo/hit.png";
import parque from "../../assets/Catalogo/parque.png";
import plus from "../../assets/Catalogo/plus.png";
import elysium from "../../assets/Catalogo/elysium.png";
import bento from "../../assets/Catalogo/bento.png";
import reserva from "../../assets/Catalogo/reserva.png";
import eixo from "../../assets/Catalogo/eixo.png";
import explore from "../../assets/Catalogo/explore.png";
import maison from "../../assets/Catalogo/maison.png";
import ibiza from "../../assets/Catalogo/ibiza.png";
import vista from "../../assets/Catalogo/vista.png";
import novo from "../../assets/Catalogo/novo.png";
import prado from "../../assets/Catalogo/prado.png";
import residencial from "../../assets/Catalogo/residencial.png";

const CatalogoCards = () => {
  const items = [
    { id: 1, img: aya },
    { id: 2, img: cena },
    { id: 3, img: hit },
    { id: 4, img: parque },
    { id: 5, img: plus },
    { id: 6, img: elysium },
    { id: 7, img: bento },
    { id: 8, img: reserva },
    { id: 9, img: eixo },
    { id: 10, img: explore },
    { id: 11, img: maison },
    { id: 12, img: ibiza },
    { id: 13, img: vista },
    { id: 14, img: novo },
    { id: 15, img: prado },
    { id: 16, img: residencial },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="catalogo-cards">
      {/* Filtros */}
      <div className="filters">
        <div className="filter-item">
          <label htmlFor="status">Status</label>
          <select id="status">
            <option value="condicoes-especiais">Condições Especiais</option>
            <option value="disponivel">Disponível</option>
            <option value="indisponivel">Indisponível</option>
          </select>
          <FaArrowDownLong className="custom-select-icon" /> {/* Ícone personalizado */}
        </div>
        <div className="filter-item">
          <label htmlFor="cidade">Cidade</label>
          <select id="cidade">
            <option value="sao-paulo">São Paulo</option>
            <option value="rio-de-janeiro">Rio de Janeiro</option>
            <option value="curitiba">Curitiba</option>
          </select>
          <FaArrowDownLong className="custom-select-icon" /> {/* Ícone personalizado */}
        </div>
        <div className="filter-item">
          <label htmlFor="bairro">Bairro</label>
          <select id="bairro">
            <option value="bairro1">Bairro 1</option>
            <option value="bairro2">Bairro 2</option>
            <option value="bairro3">Bairro 3</option>
          </select>
          <FaArrowDownLong className="custom-select-icon" /> {/* Ícone personalizado */}
        </div>
        <div className="filter-item">
          <label htmlFor="tipologia">Tipologia</label>
          <select id="tipologia">
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="kitnet">Kitnet</option>
          </select>
          <FaArrowDownLong className="custom-select-icon" /> {/* Ícone personalizado */}
        </div>
        <div className="filter-item">
          <label htmlFor="preco">Preço</label>
          <select id="preco">
            <option value="preco1">Até R$ 500.000</option>
            <option value="preco2">De R$ 500.000 a R$ 1.000.000</option>
            <option value="preco3">Acima de R$ 1.000.000</option>
          </select>
          <FaArrowDownLong className="custom-select-icon" /> {/* Ícone personalizado */}
        </div>
      </div>

      {/* Renderização dos cards */}
      <div className="catalogo-container">
        {currentItems.map((item) => (
          <div key={item.id} className="catalogo-card">
            <img src={item.img} alt={`Imagem ${item.id}`} className="catalogo-card-image" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CatalogoCards;
