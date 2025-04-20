import React from "react";

const Produto = () => {
  const [dados, setDados] = React.useState(null);
  const [preferencia, setPreferencia] = React.useState(null);

  //faz o fetch
  function buscaItem(target) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${target}`)
      .then((r) => r.json())
      .then((json) => {
        setDados(json);
        localStorage.setItem("produto", json.nome);
      });
  }

  //add produtos
  function handleClick(e) {
    const produtoClicado = e.target.innerText;
    buscaItem(produtoClicado);
  }

  //efeito onLoad
  React.useEffect(() => {
    console.log("logou na pg");
    const preferencia = localStorage.getItem("produto");
    preferencia ? setPreferencia(preferencia) : null;
    buscaItem(preferencia);
  }, []);
  return (
    <>
      <h1>Preferência: {preferencia}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {dados && (
        <>
          <h2>{dados.nome}</h2>
          <p>R$ {dados.preco}</p>
        </>
      )}
    </>
  );
};

export default Produto;
