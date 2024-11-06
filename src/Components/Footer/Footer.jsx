import "./style.css";
import logo from "../../assets/Footer/logo.png";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sidebar-container">
      <header className="header">
        <img src={logo} alt="Logo Blue" className="logo" />
        <p className="address">
          Rua Kalil Elias Warde, 219 Campina do Siqueira, Curitiba - PR
          <br />
          <span>(41) 3090-3690</span>
          <br />
          <a href="mailto:contato@blueempreendimentos.com.br">
            contato@blueempreendimentos.com.br
          </a>
        </p>
      </header>

      <nav className="navigation">
        <ul>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Nossos Negócios</a>
          </li>
          <li>
            <a href="#">Na mídia</a>
          </li>
          <li>
            <a href="#">Blue Social</a>
          </li>
          <li>
            <a href="#">Empreendimento</a>
          </li>
          <li>
            <a href="#">Quero ser parceiro</a>
          </li>
        </ul>
      </nav>

      <div className="newsletter">
        <div className="social-media">
          <p>Acompanhe nossas redes sociais</p>
          <div className="icons">
            <a href="#">
              <FaLinkedin size={30} color="#ffffff" />
            </a>
            <a href="#">
              <FaInstagram size={30} color="#ffffff" />
            </a>
            <a href="#">
              <FaFacebook size={30} color="#ffffff" />
            </a>
            <a href="#">
              <FaYoutube size={30} color="#ffffff" />
            </a>
          </div>
        </div>

        <div className="restricted-area">
          <a href="#">Área Restrita</a>
        </div>

        <footer className="footer">
          <a href="#">Termos de uso</a>
          <span>|</span>
          <a href="#">Política de Privacidade</a>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
