import "./style.css";
import { FaArrowRight } from "react-icons/fa";
import exame from "../../assets/exame.png";
import { useNavigate } from "react-router-dom";

const Notify = () => {
  const navigate = useNavigate();

  const handleNaMidia = () => {
    navigate("/naMidia");
  };

  const items = [
    {
      id: 1,
      title: "Imóvel ou CDI: qual a melhor escolha para investidores?",
      img: exame,
      description:
        "As principais características do CDI e do investimento imobiliário -- e como equilibrar seu portfólio para obter o melhor retorno possível",
      link: "https://exame.com/lideres-extraordinarios/financas/imovel-ou-cdi-qual-a-melhor-escolha-para-investidores/", // Link para o primeiro item
    },
    {
      id: 2,
      title: "Imóvel é escasso – como bater o CDI investindo em imóveis?",
      img: exame,
      description:
        "Investir em imóveis é uma estratégia robusta ao longo do tempo e supera consistentemente o CDI",
      link: "https://exame.com/lideres-extraordinarios/governanca/imovel-e-escasso-como-bater-o-cdi-investindo-em-imoveis/", // Link para o segundo item
    },
    {
      id: 3,
      title: "Quer diversificar? Confira cinco dicas para investir em imóveis",
      img: exame,
      description:
        "Saiba como diversificar seus investimentos com mais segurança através de imóveis.",
      link: "https://exame.com/lideres-extraordinarios/financas/cinco-dicas-para-investir-em-imoveis/", // Link para o terceiro item
    },
  ];

  return (
    <main className="notify">
      <header>
        <p>Blue na mídia</p>
        <button onClick={handleNaMidia}>
          Ver mais notícias <FaArrowRight />
        </button>
      </header>

      {/* Exibe os 3 primeiros itens estáticos em telas maiores que 1024px */}
      <div className="news-container">
        {items.slice(0, 3).map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.img} alt={item.title} className="news-image" />
            <h3 className="news-title">{item.title}</h3>
            <p className="news-description">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
              Ver notícia <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Notify;
