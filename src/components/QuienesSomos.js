import React from "react";
import "./QuienesSomos.css";

import data from "../images/Data and settings_Two Color.png";

const QuienesSomos = () => {
  return (
    <div className="ContainerFondo">
      
      <h1 className="nosotros1">Nosotros te ayudamos a tener éxito</h1>
      <p className="pepe">
        Haga crecer su sitio web más rápido utilizando Blue Technology como
        base.
      </p>
      <div class="flex-container">
        <div class="flex-items">
          <img className="imagenDATA" src={data}></img>
          
        </div>

        <div class="flex-items">
          <p className="textowhy">
            Desde 2004 en <span className="blue">Blue Technology</span>{" "}
            brindamos servicios especializados en bases de datos Oracle y
            Microsoft Sql-Server, MySQL, PostgreSQL, entre otras. Nuestro equipo
            cuenta con amplia experiencia en proyectos de envergadura, tanto
            locales, como regionales. Ofrecemos a nuestros Clientes compromiso,
            profesionalismo y responsabilidad con sus objetivos.
            
          </p>
          
        </div>
        
 
      </div>
      
    </div>
  );
};

export default QuienesSomos;
