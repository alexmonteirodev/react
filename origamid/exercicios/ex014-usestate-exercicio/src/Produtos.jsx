import React from "react";
import App from "./App.jsx";

const Produtos = ({ dados }) => {
  return (
    <>
      {dados && <h1>{dados.nome}</h1>}
      {dados && <p>R$ {dados.preco}</p>}
      {dados && <img src={dados.fotos[0].src} alt="" />}
    </>
  );
};

export default Produtos;
