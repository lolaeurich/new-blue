import "./style.css";
import social from "../../assets/social.png"

function HeroSocial() {
  return (
    <section className="section-social">
      <div className="social-hero">
        <div className="social-hero-texto">
            <h2>Blue Social</h2>
            <p>Educação e Sustentabilidade para fazer mais 
            <br/>
            pelo futuro e pelas próximas gerações</p>
        </div>
        <img alt="" src={social}/>
      </div>
    </section>
  );
}

export default HeroSocial;