import "./style.css";
import { FaArrowRight } from "react-icons/fa";
import image from "../../assets/Notify/notify.png";
import { useNavigate } from "react-router-dom";

const Notify = () => {

  const navigate = useNavigate();

  const handleNaMidia = () => {
    navigate("/naMidia");
  };

  const items = [
    {
      id: 1,
      title: "5 dicas para investir em imóveis",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
    {
      id: 2,
      title: "Moradia econômica no Brasil",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
    },
    {
      id: 3,
      title: "5 estratégias inovadoras",
      img: image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit quam orci, quis lacinia magna posuere non.",
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
            <a href="#" className="news-link">
              Ver notícia <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Notify;
