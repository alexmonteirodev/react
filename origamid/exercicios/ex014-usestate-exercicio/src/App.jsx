import React from "react";
import Produtos from "./produtos.jsx";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  function handleClick(e) {
    setCarregando(true);
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    ).then((r) => {
      r.json().then((json) => {
        console.log(json);
        setCarregando(false);
        setDados(json);
      });
    });
  }

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {/*{carregando ? "Carregando..." : ""} */}
      {!carregando && dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
