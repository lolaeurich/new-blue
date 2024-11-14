import React, { useState } from "react";
import "./style.css";
import diferen from "../../../assets/Aya/diferen.png";
import end from "../../../assets/Aya/ayaend.png";

function AyaDifer() {

  return (
    <section className="section-aya-difer">
        <h3>Diferenciais</h3>
        <img alt="" src={diferen}/>

        <div className="difer-localizacao">
            <div className="about-details3">
            <div className="container-relative3">
                <h3>Localização</h3>
                <h5>Rua Emiliano Perneta, 260 - Centro, 
                    <br/>
                    Curitiba - PR, 80010-050
                </h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur 
                <br/>
                adipiscing elit. In at justo vulputate, porta 
                <br/>
                est eget, accumsan nisi. Phasellus ac 
                <br/>
                pellentesque nisl.
                </p>
            </div>
            </div>

            <img className="end" alt="" src={end}/>
        </div>
    </section>
  );
}

export default AyaDifer;
