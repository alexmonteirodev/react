import React from "react";
import Home from "./home";
import Produtos from "./produtos";

console.log(window.location);
const path = window.location.pathname;
console.log(path);

//const { pathname } = window.location; //desestruturado, daria igual

const Index = () => {
  return (
    <>
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="produtos">Produtos</a>
        </li>
      </ul>

      {path === "/home" ? <Home /> : null}
      {path === "/produtos" ? <Produtos /> : null}

      {/*  if (homeClick()) {
          <Home />;
        } else if (produtosClick()) {
          <Produtos />;
        } else {
          null;
        } */}
    </>
  );
};

export default Index;
