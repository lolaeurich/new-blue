import "./style.css";
import logo from "../../assets/Footer/logo.png";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import you from "../../assets/you.png";
import area from "../../assets/arearest.png";
import hubox from "../../assets/hubox.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleNaMidia = () => {
    navigate("/naMidia");
  };

  const handleSocial = () => {
    navigate("/blueSocial");
  };

  const handleCatalogo = () => {
    navigate("/catalogo");
  };

  const handleNossosNegocios = () => {
    navigate("/nossosNegocios");
  };



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
            <a onClick={handleNossosNegocios}>Nossos Negócios</a>
          </li>
          <li>
            <a onClick={handleNaMidia}>Na mídia</a>
          </li>
        </ul>

        <ul>
          <li>
            <a onClick={handleSocial}>Blue Social</a>
          </li>
          <li>
            <a onClick={handleCatalogo}>Empreendimento</a>
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
            <a href="https://www.linkedin.com/company/blueempreendimentos/">
              <img alt="" src={linkedin} size={30} color="#ffffff" />
            </a>
            <a href="https://www.instagram.com/blue_empreendimentos/">
              <img alt="" src={insta} size={30} color="#ffffff" />
            </a>
            <a href="https://www.facebook.com/inicioempreedimentos">
              <img alt="" src={face} size={30} color="#ffffff" />
            </a>
            <a href="https://www.youtube.com/channel/UC-X1uSqc5-e_o6OjiLXn-aw">
              <img alt="" src={you} size={30} color="#ffffff" />
            </a>
          </div>
        </div>

        <div className="restricted-area">
          <a href="https://portaldoinvestidor.blueempreendimentos.com.br/"><img style={{paddingRight: "5px"}} alt="" src={area}/>Área Restrita</a>
        </div>

        <footer className="footer">
          <a href="#">Termos de uso</a>
          <span>|</span>
          <a href="#">Política de Privacidade</a>
        </footer>

        <img className="hubox" alt="" src={hubox}/>

      </div>
      
    </div>
  );
};

export default Footer;
