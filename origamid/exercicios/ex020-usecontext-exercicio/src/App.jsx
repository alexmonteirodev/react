import React from "react";
import { GlobalContext } from "./Globalcontext.jsx";

const App = () => {
  const { nome } = React.useContext(GlobalContext);
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    global.fetchApi();
  }, []);

  React.useEffect(() => {
    global.limpaDados();
  }, []);

  return (
    <>
      <div>{nome}</div>
      {global.dados && <div>{global.dados[0].nome}</div>}
      {/* {global && global.limpaDados()} */}

      <div></div>
    </>
  );
};

export default App;
