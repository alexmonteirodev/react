import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link> | <NavLink to="sobre">Sobre</NavLink> |{" "}
        <NavLink to="login">Login</NavLink>
      </nav>
    </>
  );
};

export default Header;
