import "./style.css";
import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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
    { id: 1, img: aya, name: "Aya", address: "Curitiba - Paraná", squareMeters: "200"},
    { id: 2, img: cena, name: "Cena Living", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 3, img: hit, name: "Hit Home", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 4, img: parque, name: "Parque das Flores", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 5, img: plus, name: "Plus Portão", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 6, img: elysium, name: "Elysium", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 7, img: bento, name: "Bento 246", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 8, img: reserva, name: "Reserva 361", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 9, img: eixo, name: "Eixo 795", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 10, img: explore, name: "Explore Botânico", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 11, img: maison, name: "Maison Alto da Glória", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 12, img: ibiza, name: "Ibiza Unique Home", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 13, img: vista, name: "Vista da Serra", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 14, img: novo, name: "Novo Prado Paiol", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 15, img: prado, name: "Novo Prado Araucária", address: "Curitiba - Paraná", squareMeters: "200" },
    { id: 16, img: residencial, name: "Residencial Jardins", address: "Curitiba - Paraná", squareMeters: "200" },
  ];

  const navigate = useNavigate();

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

      <div className="catalogo-container">
  {currentItems.map((item) => (
    <div key={item.id} className="catalogo-card"  onClick={() => handleItemClick(item.id)}>
      <img src={item.img} alt={`Imagem ${item.id}`} className="catalogo-card-image" />
      <p className="carousel-name" style={{ paddingLeft: "5%" }}>{item.name}</p>

      {/* Informações extras */}
      <div className="extra-info">
        <p style={{ paddingLeft: "5%", width: "100%" }}>{item.address}</p>
        <p style={{ paddingLeft: "5%" }}>{item.squareMeters} m²</p>
        <button className="btn-conheca" style={{ paddingLeft: "5%" }}>Conheça &rarr;</button>
      </div>
    </div>
  ))}
</div>

    </main>
  );
};

export default CatalogoCards;
