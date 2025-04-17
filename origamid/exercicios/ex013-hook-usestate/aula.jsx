// - Estado (é uma representação do seu app naquele exato momento)
//resumindo: Estado (ou state) é uma informação que o React guarda dentro de um componente, e que pode mudar enquanto o app está rodando. Toda vez que o estado muda, o React renderiza de novo a tela para mostrar as informações atualizadas sem ser preciso dar o refresh na pagina.

// O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.
//ou seja, um único estado pode influenciar diversos comportamentos
const App = () => {
  let ativo = true;

  return (
    <button onClick={handleClick}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button> //disabled={!ativo}
  );
};
//poderia ter uma className com ativo e para verificar se o item está ativo, bastaria ver se a class estava sendo usada, porém, imagine que vai puxar informações de um banco de dados. O ponto é quando saber que algo realmente está ativo poruqe a class pode estar ativa mas não representar corretamente o que eu quero saber porque derrepente não tem todas as funções no css por exemplo, pra isso serve o estado, ele serve como fonte de verdade para conferir em qual estado se encontra aquele elemento.

//suponhamos que ao clicar no botão acima, inicie a seguinte função:

function handleClick() {
  ativo = !ativo; //é dizer true = false, então na prox vez que clicar vai dar false = true, e ficar alternando sempre entre false e true.
}
// caso isso ocorra, o app não vai renderizar novamente porque uma varável mudou, porque se não se fosse renderizar a cada mudança de variável, ia renderizar pra sempre e nunca ia carregar nada. Pra isso exeistem os hooks.
//-----------------------------------------------------------------------------
// - Hooks (como se fossem os métodos do JS, porém são métodos do obbjeto React)
// Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

// - React.useState
//o hook que é utilizado para o estado especificamente é o React.useState(). Ele retorna uma array com dois itens:

const ativoHook = React.useState(false);
console.log(ativoHook); //Array(2) [false, f()]

// ele retorna o argumento que passamos e uma função, a função serve para atualizar o valor inicial/primeiro argumento. Poderia usar essa f() para pssar de false para true por exemplo. Teriamos então:

const ativoValor = ativoHook[0];
console.log(ativoValor); //acessa o valor false (primeiro item da array)

const atualizaValor = ativoHook[1];
console.log(atualizaValor); //acessa a função incubida de atualizar o valor

//logo, na app funcionaria assim:
const App2 = () => {
  const ativoArray = React.useState(false); //[false, f()]
  const ativo = ativoArray[0]; // false
  const setAtivo = ativoArray[1]; // f()

  function handleClick() {
    setAtivo(true); //seAtivo acessa ativoArray[1], que é uma função, logo da pra ativar ela e passar outro valor
  }

  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {ativo ? "Botão Ativo" : "Botão Inativo"} //true mostra ativo, false
        mostra inativo
      </button>
    </>
  );
};

//no exemplo abaixo utilizando o hook, é dizer: essa função vai mudar esse estado específico, e quando essa função for ativada, renderize novamente meu componente e os filhos dele. Pra que essa mudança de estado seja refletida na interface do usuário.
//logo, juntando tudo, podemos desestruturar o useState e fazer assim:
//importante: sempre quando for desestruturar o useState passe o valor no index 0 e 'setValor' no index 1, por convenção e boas práticas assim se sabe que está falando com a f() do useState. Boas práticas apenas para quando ver o set algo, saber que é uma função que vem do useState para setar um novo valor:

const App3 = () => {
  const [ativo, setAtivo] = React.useState(false);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  return (
    <button onClick={() => setAtivo(true)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  );
};

//obs: dando inspecionar na aba de componentes tem la sua app e da pra conferir os hooks que estão rodando e qual o estado de cada um deles. no exemplo acima o state aparece como false e ao clicar ele fica true.

// - Múltiplos Estados
//Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.
const App4 = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "Andre", idade: "30" });

  return <div></div>;
};

//obs: um macete para adicionar uma propriedade no objeto dados seria:
function handleClick() {
  setDados({ ...dados, faculdade: true }); //desestrutura o objeto e puxa o objeto dados completo com o rest e add normal uma ou quantas propriedades queiser
}
//obs: serve pra objeto e pra array
//-----------------------------------------------------------------------------

// - Props
// Podemos passar o estado e a função de modificação como propriedades para outros elementos.
//exemplo:

// App
import React from "react";
import Modal from "./Modal";
import ButtonModal from "./ButtonModal";

const AppModal = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

// Modal.jsx
import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal === true) {
    return (
      <div>
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  } else {
    return null;
  }
};

// ButtonModal.jsx
import React from "react";

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir Modal</button>;
};
//-----------------------------------------------------------------------------
