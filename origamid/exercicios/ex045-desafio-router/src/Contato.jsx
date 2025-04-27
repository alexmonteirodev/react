import React from "react";
import imgContato from "./img/contato.jpg";

const Contato = () => {
  return (
    <>
      <div className="div-contact">
        <img className="img-contato" src={imgContato} alt="" />
        <div className="div-infos-contact">
          <h2>Entre em contato.</h2>
          <ul>
            <li>andre@origamid.com</li>
            <li>99999-9999</li>
            <li>Rua Ali Perto, 999</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contato;
