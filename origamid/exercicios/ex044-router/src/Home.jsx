import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head.jsx";

const Home = () => {
  return (
    <div>
      <Head title="Home" description="essa é a descrição da home" />
      <h1>Home</h1>
      <p>Esse é a home.</p>
      <Link to="produto/notebook">Notebook</Link> |{" "}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
