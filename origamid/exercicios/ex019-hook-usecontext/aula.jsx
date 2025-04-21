// - useContext
// createContext
// O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.
// basicamente, da pra criar um componente e passar os dados ou uma função por exemplo usando o props pros, porém isso se torna um problema quando a aplicação é muito grande e tem que ficar importando manualmente em cada uma e para os elementos pais tem uma forma diferente, enfim, usando o createContext da pra criar um contexto global que pode ser acessado por qualquer componente.

// UserContext.jsx
import React from "react";

const UserContext = React.createContext();

export default UserContext;


// app.jsx
import React from 'react'
import UserContext from 'UserContext.jsx'

const App = () => {
    console.log(UserContext) // retorna Symbol que possui dois métodos: consumer e provider (provider é que vai prover o contexto global)
  return (
    <UserContext.Provider value={{nome: 'andre'}}>
      < Produto/> //tem acesso ao contexto do userContext
    </UserContext.Provider>
  )
}

export default App


//produto.jsx
import React from 'react'
import UserContext from 'UserContext.jsx'

const Produto = () => {
    const dados = React.useContext(UserContext)
    console.log(dados) // {nome: 'Andre'}
  return (
    <div>{dados.nome}</div> // Andre
  )
}

export default Produto

// - GlobalStorage
// Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadoras do useState.

//App.js
import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;


// GlobalContext.js
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};


// Produto.js
import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};

export default Produto;

