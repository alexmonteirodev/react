import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./style.css";
import Produtos from "./Produtos.jsx";
import Contato from "./Contato.jsx";
import PaginaErro from "./PaginaErro.jsx";
import Home from "./Home.jsx";
import CadaProduto from "./CadaProduto.jsx";

const App = () => {
  const [produtos, setProdutos] = React.useState([]);

  function clickProdutos() {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="produtos" className="btn" onClick={clickProdutos}>
          Produtos
        </NavLink>
        <NavLink to="contato" className="btn">
          Contato
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Produtos produtos={produtos} />}>
          <Route path="nome-cada-produto" element={<CadaProduto />} />
        </Route>
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<PaginaErro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
