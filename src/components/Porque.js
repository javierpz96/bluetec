import React from "react";
import "./Porque.css";
import storage from "../images/Data storage_Isometric.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ConstructionIcon from '@mui/icons-material/Construction';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import BedtimeTwoToneIcon from '@mui/icons-material/BedtimeTwoTone';

const Porque = () => {
  return (
    <div>
      <div className="whyh1">
      <h1>¿Qué hace que <span className="blue">Blue Technology</span> sea tan diferente?</h1>
      </div>
      <div className="whyp">
        
        <p>Con más de 20 años de experiencia en hospedaje, nos enfocamos en sitios exitosos para diseñadores web, desarrolladores, blogueros y negocios en línea. </p>
        <p>¡Nuestra comunidad y soporte lo ayudan a crear un sitio web de manera rápida y fácil!</p>
      </div>

      <section class="FlexContainer">
        <div className="iconu">
          <HeadsetMicIcon
            sx={{ fontSize: 60 }}
            style={{ fill: "#21c4ff" }}
          ></HeadsetMicIcon>
          <h1>24/7</h1>
          <p>
            Nuestros expertos estarán disponibles para ayudarlo,en cualquier momento, de día o de noche.
          </p>
        </div>

        <div className="iconu">
          <ConstructionIcon
            sx={{ fontSize: 60 }}
            style={{ fill: "#21c4ff" }}
          ></ConstructionIcon>
          <h1>Tecnicos</h1>
          <p>
            Hacemos más que alojamiento web. Nuestro conjunto de herramientas
            incluye todo lo que necesita para tener éxito.
          </p>
        </div>

        <div className="iconu">
          <SecurityTwoToneIcon
            sx={{ fontSize: 60 }}
            style={{ fill: "#21c4ff" }}
          ></SecurityTwoToneIcon>
          <h1>Seguridad</h1>
          <p>
            Creemos firmemente en proporcionar soluciones de código abierto a
            nuestros clientes siempre que sea posible.
          </p>
        </div>
        <div className="iconu">
          <BedtimeTwoToneIcon
            sx={{ fontSize: 60 }}
            style={{ fill: "#21c4ff" }}
          ></BedtimeTwoToneIcon>
          <h1>Tranquilidad</h1>
          <p>La garantizamos para que no tenga que preocuparse por ello.</p>
        </div>
      </section>
    </div>
  );
};

export default Porque;
