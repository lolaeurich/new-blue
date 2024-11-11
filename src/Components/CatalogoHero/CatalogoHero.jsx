import "./style.css";
import whats from "../../assets/whats.png"

function CatalogoHero() {
  return (
    <section className="section-catalogo">
      <div className="catalogo-hero">
        <div className="catalogo-hero-texto">
          <h2>Para fazer mais <span>investimentos</span>
            <br/>
                <span>rentáveis e inteligentes,</span> 
            <br/>    
                seja para investir ou morar
            </h2>
          <p>Entre em contato com a nossa equipe:</p>
          <div className="whats">
            <img alt="" src={whats}/>
            <p>(41) 3090-3651</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogoHero;