import React from "react";
import { useLocation, useParams, NavLink, Outlet } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  const location = useLocation();

  const search = new URLSearchParams(location.search); //f para buscar algo pelo site/banco de dados

  return (
    <div>
      <h1>Produto</h1>
      <h2>Produto: {params.id}</h2>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
