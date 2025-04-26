import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  const location = useLocation();

  const search = new URLSearchParams(location.search); //f para buscar algo pelo site/banco de dados

  return (
    <div>
      <h1>Produto</h1>
      <h2>Produto: {params.id}</h2>
    </div>
  );
};

export default Produto;
