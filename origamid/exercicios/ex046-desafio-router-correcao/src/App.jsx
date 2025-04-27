import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import "./App.css";
import Produto from "./components/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
