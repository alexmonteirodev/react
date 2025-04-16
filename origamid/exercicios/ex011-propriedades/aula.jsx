// - Propriedades
// Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props.
// as propriedades funcionam da mesma forma de uma função que recebe argumentos e ao invés de colocar os parenteses e passar os argumentos, vamos passar direto na tag como se fosse um atributo de html.
const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" />
      <Titulo texto="Meu Segundo Título" />
    </section>
  );
};
//---------------------------------------------------------

// - Múltiplas Propriedades
// Podemos passar quantas propriedades quisermos.

const Titulo2 = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App2 = () => {
  return (
    <section>
      <Titulo cor="blue" texto="Meu Primeiro Título" />
      <Titulo cor="red" texto="Meu Segundo Título" />
    </section>
  );
};
//---------------------------------------------------------

// - Desestruturação
// É comum desestruturarmos as propriedades.

const Titulo3 = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>; //elimina o props. -> props.cor e props.texto
};

const App3 = () => {
  return (
    <section>
      <Titulo cor="blue" texto="Meu Primeiro Título" />
      <Titulo cor="red" texto="Meu Segundo Título" />
    </section>
  );
};
//---------------------------------------------------------

// - Children
// Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children.

const Titulo4 = (props) => {
  return <h1>{props.children}</h1>;
};

const App4 = () => {
  return (
    <section>
      <Titulo>Esse é o children</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};
//---------------------------------------------------------

// - Rest e Spread
//Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input;
//---------------------------------------------------------

// - Dados
// Podemos passar diferentes tipos de dados e até outros componentes nas propriedades.
const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};

const App5 = () => {
  const logado = true;
  const nome = "André";

  return (
    <section>
      <Header logado={logado} nome={nome} />
    </section>
  );
};
