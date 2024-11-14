import "./style.css";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaFastBackward, FaFastForward } from "react-icons/fa";
import image from "../../assets/Notify/notify.png";
import exame from "../../assets/exame.png";
import ayalogo from "../../assets/ayalogo.jpg";
import aya from "../../assets/aya4.png";
import brain from "../../assets/brain.png";
import jp from "../../assets/jp.png";
import sind from "../../assets/sind.png";
import band from "../../assets/band.png";
import ypo from "../../assets/ypo.png";


const NaMidiaCards = () => {
  // Define os itens dos cards
  const items = [
    { 
      id: 1, 
      title: "AYA RESIDENCES - Lançamento", 
      img: aya, 
      description: "Mais de 500 unidades vendidas, o AYA Residences é o maior sucesso imobiliário da cidade de Curitiba.",
      link: "https://www.youtube.com/watch?v=6RnmDKzwYzw" // Link para o primeiro item
    },
    { 
      id: 2, 
      title: "Aya Residence: 90% vendido em 42 dias", 
      img: brain, 
      description: "Convidamos José Mario Marim Jr, CEO da Blue, e Luiz Brenner Rose, Diretor da Invespark.",
      link: "https://www.youtube.com/watch?v=afgsSvPrgSg" // Link para o segundo item
    },
    { 
      id: 3, 
      title: "MERCADO IMOBILIÁRIO DE CANTO A CANTO | EPISÓDIO 28", 
      img: jp, 
      description: "No 27º episódio, Canto recebe o CEO da Isket, Joseph Galiano Neto e o CEO  da Quartzo Capital, Marcel Malczewski.",
      link: "https://www.youtube.com/watch?v=JwLP227xBzY" // Link para o terceiro item
    },
    { 
      id: 4, 
      title: "Sinduscon Meeting - 27/08/2024 - Sandro Gamba", 
      img: sind, 
      description: "O financiamento imobiliário está em alta no país. A expectativa de crescimento é de aproximadamente 8% em 2024, segundo dados da Abecip (Associação Brasileira das Entidades de Crédito Imobiliário e Poupança).",
      link: "https://www.youtube.com/live/A3tuWIbxtX8" // Link para o quarto item
    },
    { 
      id: 5, 
      title: "Aluguel residencial: a bola da vez no Brasil?", 
      img: exame, 
      description: "Entenda a tendência de profissionalização da locação residencial no país e veja como investidores grandes e pequenos podem aproveitar esse mercado",
      link: "https://exame.com/lideres-extraordinarios/aluguel-residencial-a-bola-da-vez-no-brasil/" // Link para o quinto item
    },
    { 
      id: 6, 
      title: "O impacto do MCMV na indústria da Construção - José Mario Marim", 
      img: band, 
      description: "O impacto do MCMV na indústria da Construção - José Mario Marim | BAND NEWS",
      link: "https://www.youtube.com/watch?v=jF8W_XMliP4" // Link para o quinto item
    },
    { 
      id: 7, 
      title: "Vamos falar sobre finanças? Acompanhe os escritores do Portal Líderes Extraordinários do YPO", 
      img: ypo, 
      description: "O Portal Líderes Extraordinários surge em uma parceria do YPO com a Exame para trazer assuntos relevantes sobre finanças, mercado financeiro, investimento e educação financeira.",
      link: "https://open.spotify.com/episode/1W3VgNTgrnED9D0C4xBIs1?si=nIEECdIqRH6ZGDjlV5S8Og&utm_medium=share&utm_source=linktree&nd=1&dlsi=3c3f08452957468d" // Link para o quinto item
    },
    { 
      id: 8, 
      title: "O impacto do MCMV na indústria da Construção - José Mario Marim", 
      img: ypo, 
      description: "A importância do minimalismo e o estilo de vida minimalista",
      link: "https://open.spotify.com/episode/0uJHQzb4deENdSPS3WRbai?go=1&sp_cid=d8cb7d89b96afdf21df1abe788f29fbf&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=07741ae231a944d0" // Link para o quinto item
    },
    { 
      id: 9, 
      title: "Imóvel ou CDI: qual a melhor escolha para investidores?", 
      img: exame, 
      description: "As principais características do CDI e do investimento imobiliário - e como equilibrar seu portfólio para obter o melhor retorno possível",
      link: "https://exame.com/lideres-extraordinarios/financas/imovel-ou-cdi-qual-a-melhor-escolha-para-investidores/" // Link para o quinto item
    },
    { 
      id: 10, 
      title: "Imóvel é escasso – como bater o CDI investindo em imóveis?", 
      img: exame, 
      description: "Investir em imóveis é uma estratégia robusta ao longo do tempo e supera consistentemente o CDI",
      link: "https://exame.com/lideres-extraordinarios/governanca/imovel-e-escasso-como-bater-o-cdi-investindo-em-imoveis/" // Link para o quinto item
    },
    { 
      id: 11, 
      title: "Quer diversificar? Confira cinco dicas para investir em imóveis", 
      img: exame, 
      description: "Saiba como diversificar seus investimentos com mais segurança através de imóveis.",
      link: "https://exame.com/lideres-extraordinarios/financas/cinco-dicas-para-investir-em-imoveis/" // Link para o quinto item
    },
    { 
      id: 12, 
      title: "5 estratégias inovadoras para gerar renda passiva com imóveis", 
      img: exame, 
      description: "Nesse artigo, mergulharemos em cinco alternativas emocionantes para aproveitar o mercado imobiliário brasileiro e obter um fluxo constante de receita",
      link: "https://exame.com/lideres-extraordinarios/financas/imovel-ou-cdi-qual-a-melhor-escolha-para-investidores/" // Link para o quinto item
    },
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
            {/* Link para a notícia, com target="_blank" para abrir em nova aba */}
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="midia-card-link">
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
