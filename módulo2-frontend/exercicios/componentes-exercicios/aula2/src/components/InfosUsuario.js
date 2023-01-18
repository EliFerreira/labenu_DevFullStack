import React from "react";
import logo from "../assets/tata.png";

const InfoUsuario = () => {
  const nomeUsuario = "Eli S. Ferreira";
  return (
    <div className="autor">
      <img id="imagem" src={logo} />
      <h4>{nomeUsuario}</h4>
    </div>
  );
};
export default InfoUsuario;
