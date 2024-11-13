import "./style.css";
import logoAya from "../../assets/Hero/aya.png";
import { FaArrowRight } from "react-icons/fa";
import sobre from "../../assets/sobre.png";

function SobreHero() {
  return (
    <section>
      <div className="sobre-hero">
        <div className="sobre-hero-text">
          <header>
            <h1>Para fazer mais
                <br/>
                por você
            </h1>
          </header>
          <p>Com mais de 16 anos de história, a Blue é 
            <br/>
            uma holding de gestão de produtos 
            <br/>
            imobiliários focada na excelência. Criamos 
            <br/>
            empreendimentos inovadores e 
            <br/>
            sustentáveis, transformando estruturas em 
            <br/>
            lares que celebram a vida.</p>

            <button>Saiba mais</button>
        </div>

        <img alt="" src={sobre}/>

      </div>
    </section>
  );
}

export default SobreHero;
