import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Sobre from "./Sobre.jsx";
import Header from "./Header.jsx";
import NaoEcontrada from "./NaoEcontrada.jsx";
import Login from "./Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* //header geralmente não muda então pode ficar fora das rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NaoEcontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
