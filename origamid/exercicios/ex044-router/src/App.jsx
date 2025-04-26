import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Sobre from "./Sobre.jsx";
import Header from "./Header.jsx";
import NaoEcontrada from "./NaoEcontrada.jsx";
import Login from "./Login.jsx";
import Produto from "./Produto.jsx";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";
import ProdutoDescricao from "./ProdutoDescricao";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* //header geralmente não muda então pode ficar fora das rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEcontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
