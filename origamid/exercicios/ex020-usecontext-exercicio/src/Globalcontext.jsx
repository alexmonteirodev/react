import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const nome = "andre";

  function fetchApi() {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setDados(json);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados", error);
      });
  }

  React.useEffect(() => {
    fetchApi();
  }, []);

  function limpaDados() {
    setDados(null);
  }
  return (
    <GlobalContext.Provider value={{ nome: nome, fetchApi, dados, limpaDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
