import React from 'react';
import "./style.css";
import logo1 from "../../assets/Partners/logo1.png";
import logo2 from "../../assets/Partners/logo2.png";
import logo3 from "../../assets/Partners/logo3.png";
import logo4 from "../../assets/Partners/logo4.png";
import logo5 from "../../assets/Partners/logo5.png";
import logo6 from "../../assets/Partners/logo6.png";
import logo7 from "../../assets/Partners/logo7.png";
import logo8 from "../../assets/Partners/logo8.png";
import logo9 from "../../assets/Partners/logo9.png";
import logo10 from "../../assets/Partners/logo10.png";
import logo11 from "../../assets/Partners/logo11.png";
import logo12 from "../../assets/Partners/logo12.png";
import logo13 from "../../assets/Partners/logo13.png";
import logo14 from "../../assets/Partners/logo14.png";
import logo15 from "../../assets/Partners/logo15.png";
import logo16 from "../../assets/Partners/logo16.png";
import logo17 from "../../assets/Partners/logo17.png";
import logo18 from "../../assets/Partners/logo18.png";
import logo19 from "../../assets/Partners/logo19.png";
import logo20 from "../../assets/Partners/logo20.png";
import logo21 from "../../assets/Partners/logo21.png";
import pilares from "../../assets/pilarescards.png";
import fazer from "../../assets/fazermais.png";

const Pilares = () => {

    return (
        <div className='pilares'>
           <h2>Nossos pilares</h2>

           <div className='pilares-grid'>
             <img alt='' src={pilares}/>
           </div>

           <div className='para-fazer-mais'>
                <div className='fazer-mais-text'>
                    <h2>Para fazer mais com menos</h2>
                    <h4>Cultura e equipe</h4>
                    <p>Mantemos uma estrutura enxuta e uma cultura 
                    <br/>
                    forte, com profissionais referência em suas áreas. 
                    <br/>
                    Desenvolvemos com ética e eficiência, sempre 
                    <br/>
                    alinhados às melhores práticas do mercado. Nossa 
                    <br/>
                    equipe de especialistas é apaixonada por criar espaços 
                    <br/>
                    que inspiram vida e energia, dedicando-se a entregar 
                    <br/>
                    resultados excepcionais.</p>
                </div>

                <img alt='' src={fazer}/>
           </div>
        </div>
    );
}

export default Pilares;
