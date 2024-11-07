import "./style.css";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaFastBackward, FaFastForward } from "react-icons/fa";
import image from "../../assets/Notify/notify.png";

const NaMidiaCards = () => {
  // Define os itens dos cards
  const items = [
    { id: 1, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 2, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 3, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 4, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 5, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 6, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 7, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 8, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 9, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 10, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
    { id: 11, title: "5 dicas para investir em imóveis", img: image, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non." },
  ];

  // Estado para controlar a página atual e itens por página
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Função para atualizar o número de itens por página com base na largura da tela
  const updateItemsPerPage = () => {
    if (window.innerWidth > 999) {
      setItemsPerPage(12); // 12 itens por página para telas maiores que 999px
    } else {
      setItemsPerPage(4); // 4 itens por página para telas menores ou iguais a 999px
    }
  };

  // Atualiza os itens por página ao redimensionar a janela
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []); // O array vazio faz isso acontecer apenas uma vez, após o primeiro render

  // Calcular os itens da página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Função para rolar para o topo com comportamento suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // A rolagem suave
    });
  };

  // Funções de navegação da página
  const nextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
      scrollToTop(); // Rola para o topo após navegar
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop(); // Rola para o topo após navegar
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    scrollToTop(); // Rola para o topo após navegar
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
    scrollToTop(); // Rola para o topo após navegar
  };

  const goToLastPage = () => {
    setCurrentPage(Math.ceil(items.length / itemsPerPage));
    scrollToTop(); // Rola para o topo após navegar
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <main className="na-midia-cards">
      <div className="na-midia-container">
        {currentItems.map((item) => (
          <div key={item.id} className="midia-card">
            <img src={item.img} alt={item.title} className="midia-card-image" />
            <h3 className="midia-card-title">{item.title}</h3>
            <p className="midia-card-description">{item.description}</p>
            <a href="#" className="midia-card-link">
              Ver notícia <FaArrowRight />
            </a>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="pagination">
        <button onClick={goToFirstPage} disabled={currentPage === 1}>
          <FaFastBackward /> {/* Ícone de flecha dupla para a primeira página */}
        </button>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <FaArrowLeft /> {/* Ícone de flecha para a página anterior */}
        </button>

        {/* Mostrar números de páginas */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          <FaArrowRight /> {/* Ícone de flecha para a próxima página */}
        </button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>
          <FaFastForward /> {/* Ícone de flecha dupla para a última página */}
        </button>
      </div>
    </main>
  );
};

export default NaMidiaCards;
