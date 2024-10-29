import React from 'react';
import "./style.css";
import about from "../../assets/About/about.png";

const About = () => {

    return (
        <div className='about'>
            <div className='primeira-img'>
                <img alt='' src={about}/>
                <div className='about-text'>
                    <h3>+ de 15 mil</h3>
                    <p>unidades</p>
                    <h3>+ de 1 milhão</h3>
                    <p>de metros quadrados</p>
                    <h3>+ de 1,4 bilhões</h3>
                    <p>de VGV no triênio</p>
                </div>
            </div>

            <div className="about-info">
                <div className='about-text2'>
                    <h2>Para fazer mais<span> projetos de sucesso</span></h2>
                    <p>Na Blue, transformamos ideias em realidade. Com um histórico sólido, entregamos projetos de alta qualidade
                        para todas as fases da vida. Confiança, expertise e resultados concretos são nossos compromissos.</p>

                    <button>Sobre nós</button>  
                </div>    
            </div>

            <div className='object'>
                
            </div>
        </div>
    );
}

export default About;
