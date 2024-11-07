import "./style.css";

const Front = () => {
  return (
    <div className="front-img">
      <div className="front">
        <h3>Conheça as 
          <br/>
          <span style={{fontWeight: "bold"}}>frentes de negócio</span> 
          <br/>
          do Grupo Blue</h3>
        <p>
          Somos uma Holding que atua na gestão de produtos imobiliários através
          de nossas marcas subsidiás.
        </p>
        <button>Saiba mais</button>
        <div className="front-decorate"></div>
      </div>
    </div>
  );
};

export default Front;
