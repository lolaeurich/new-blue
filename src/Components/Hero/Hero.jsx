import "./style.css";
import logoAya from "../../assets/Hero/aya.png";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Hero() {
  return (
    <section>
      <MdArrowBackIos className="arrow left" />
      <MdArrowForwardIos className="arrow right" />
      <div className="hero">
        <div className="vector"></div>
        <div className="hero-text">
          <header>
            <h1>Suítes e homes</h1>
            <h3>de 21 a 54 m²</h3>
          </header>
          <p>Rua Emiliano Perneta,
            <br/>
             260 - Centro</p>
          <footer>
            <img
              src={logoAya}
              alt="logo"
            />
            <a>
              <span style={{cursor: "pointer"}}>Conheça</span>
              <FaArrowRight />
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Hero;
