import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); //define a variavel 'navigate' para guardar os dados

  function handleLogin() {
    console.log("faz o login com fetch");
    navigate("/sobre"); //repare que se usa o / e não só o sobre porque ele tem que saber que está falando com o sobre dentro da raiz, se não direcionaria para algo como login/sobre
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
