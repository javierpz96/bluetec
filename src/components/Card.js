import React from "react";
import "./Card.css";
import oracle from "../images/oraclelogo.png";
import mysql from "../images/kisspng-microsoft-sql-server-computer-servers-dblink-5b3ea0151a9455.2593797815308308691089.png";
import base from '../images/basededatos.png'

import guardia from '../images/shield.png'

import cloud2 from '../images/clodu2.png'

const Card = () => {
  return (
    <div className="containerFondoCard">
      <div className="uno">
        <li>
        <img className="oracle" src={oracle}></img>
        <p><span>Oracle</span></p>
        
            <ul>Instalaciones OnPremise</ul>
            <ul>Tuning general de la base de datos</ul>
            <ul>Tuning de sentencias SQL</ul>
            <ul>Instalación de parches y actualizaciones</ul>
            <ul>Migración de datos entre distintas bases de datos</ul>
            <ul>Actualización de ambientes</ul>
            <ul>Diseño e implementación de Oracle Data Guard </ul>
            <ul>Instalación y configuración de Oracle Grid Control</ul>
            <ul>Oracle Audit Vault  Oracle Database Vault</ul>
            <ul>Oracle Database Firewall</ul>
        </li>
        <div>
          <li>
            <img className="base" src={base}></img>
          <p><span>Bases de datos Oracle y SQL Server</span></p>
          <ul>Análisis de performance y tuning</ul>
          <ul>Instalación y Configuración</ul>
          <ul>Actualización y Migración</ul>
          <ul>Planes de contingencia</ul>
          <ul>Estrategias de backup y recovery</ul>
          <ul>Seguridad</ul>
          </li>
        </div>
        <div>
          <li>
            <img className="mysql" src={mysql}></img>
            <p><span>SQL Server </span></p>
            <ul>Instalación On Premise</ul>
            <ul>Tuning de base de datos</ul>
            <ul>Actualizaciones</ul>
            <ul>Migración de datos</ul>
            <ul>Diseño de soluciones de HA-DR</ul>
            <ul>Diseño y configuración de clusters Always-On</ul>
          </li>
        </div>
      </div>
      <div className="tres">
        <div>

          <img className="guardia" src={guardia}></img>
          <li>
            
            <p><span>Guardia</span></p>
            <ul>Servicio de guardia bases de datos 7x24x365 </ul>
            <ul>Servicios de guardia a medida del Cliente.</ul>
            <ul>Guardia de nivel 1 y/o 2.</ul>
            <ul>Guardias pasivas y/o activas.</ul>
            <ul>Monitoreo y gestión de alertas.</ul>
          </li>
        </div>
      </div>
      <div className="cuatro">
        <div>
          <li>
            <ul>Servicio de soporte de base de datos </ul>
            <ul>Modalidad de guardia a la medida del Cliente</ul>
            <ul>Niveles de profesionales de guardia a elección.</ul>
            <ul>Atención de incidentes 7x24x365</ul>
            <ul>Guardias pasivas y/o activas </ul>
            <ul>Monitoreo de servicios y/o procesos</ul>
          </li>
        </div>
      </div>
      <div className="cinco">
        <div>
          <img  className="cloud2" src={cloud2}></img>
          <li>
            <ul>Servicios sobre Cloud</ul>
            <ul>Migración de bases de datos a plataformas cloud</ul>
            <ul>Administración de bases de datos sobre Cloud</ul>
            <ul>Servicios contingentes sobre Cloud </ul>
          </li>
          <li>
          <ul>Migración de bases de datos a servicios Cloud Oracle o Azure</ul>
          <ul>Implementaciones sobre servicios Cloud o Azure</ul>
          <ul>Configuración de servicios de contingencia en Cloud</ul>
          <ul>
            Configuración de servicios de contingencia de servicios Cloud sobre
            On Premise.
          </ul>
          </li>
        </div>
      </div>
      <div className="seis">
        <div>
          <li>
            <ul>Diseño de modelos de datos OLTP y Data warehouse</ul>
            <ul>Desarrollo de integraciones para servicios web</ul>
            <ul>Desarrollos PL/SQL</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Card;
