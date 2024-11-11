import "./style.css";
import amor from "../../assets/amor.png"
import ceai from "../../assets/ceai.png"

function ComoContribuimos() {
  return (
    <section className="section-contribuimos">
      <div className="contribuimos-hero">
        <div className="contribuimos-hero-texto">
            <h2>Como contribuimos</h2>
            <p>No contexto em que estamos vivendo, é o momento de pensar nos mais jovens e em sua 
                <br/>
                formação, para assim seguir construindo um futuro melhor. Conheça um pouco mais as 
                <br/>
                iniciativas que contribuímos:</p>
        </div>

        <div className="contribuimos-img">
            <div className="contribuimos-card1">
                <img alt="" src={amor}/>
                <p> A <span>Campanha Amor Contagia</span> é uma 
                    <br/>
                    iniciativa do Instituto Positivo em 
                    <br/>
                    parceria com RPC, MP-PR, UFPR, e 
                    <br/>
                    outros empresários.</p>
            </div>

            <div className="contribuimos-card2">
                <img alt="" src={ceai}/>
                <p>A <span>Casa Abibe Isfer</span> auxilia jovens,
                    <br/>
                    adultos e crianças nas áreas de 
                    <br/>
                    educação, cultura, saúde e geração 
                    <br/>
                    de renda.</p>
            </div>
        </div>
      
      </div>
    </section>
  );
}

export default ComoContribuimos;