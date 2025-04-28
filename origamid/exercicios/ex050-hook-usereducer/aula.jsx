// - React.useReducer
//basicamente, imagine que existe uma função de contar ao clicar no btn + ele aumenta 1 e no - ele diminui 1. Depois cria outra função que aumenta 10 e x caso, o useReducer serve para organizar essas funções em um lugar só pra não ficar várias funções perdidas por aí que alteram o mesmo estado (nesse caso o contar, porque em todas elas se usa o setContar).
//logo, O React.useReducer serve justamente para organizar melhor várias formas diferentes de alterar o mesmo estado, principalmente quando essas alterações começam a ficar mais complexas do que só um setContar(prev => prev + 1) simples. Em vez de ficar criando várias funções soltas que todas chamam setContar de jeitos diferentes, você coloca todas as lógicas de atualização dentro de um só lugar: o reducer.

// o useReducer tem dois argumentos:
// 1ª - função redutora
// 2ª - estado inicial

// na hora de usar o useReducer ao invés de definir o setEstado, usamos o dispatch que é uma função que envia as ações/funções pro reducer.
const [state, dispatch] = React.useReducer(reducer, 0);

// já a função reducer, recebe dois argumentos, sendo o primeiro o estado e o segundo é a ação que vai ser passada:
function reducer(state, action) {}

//A função reducer só é ativada quando o dispatch for ativado, assim, temos dispatch('action') e só então o que retornar da função reducer vai ser o novo estado

// Sem o useReducer:

const App = () => {
  const [contar, setContar] = React.useState(0);

  function aumentar() {
    setContar(contar + 1);
  }

  function reduzir() {
    setContar(contar - 1);
  }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
      <p>{contar}</p>
    </div>
  );
};

// Com o useReducer:

function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "reduzir":
      return state - 1;
    default:
      throw new Error();
  }
} //switch se lê: caso 'aumentar' for igual a action, retorne isso. o parametro do switch é o que vai ser comparado com tudo

//A function reducer funciona assim:
if (action === "aumentar") {
  return state + 1;
} else if (action === "reduzir") {
  return state + 1;
} else {
  return new Error("Error, action não existe");
}
//obs: switch é mais comum de ver o pessoal usando

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("reduzir")}>-</button>
      <p>{state}</p>
    </div>
  );
};

//exemplo mais complexo:
function reducer(state, action, ae) {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, ["Item 1"]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "remover", content: "Item 1" })}>
        -
      </button>
      <button
        onClick={() => dispatch({ type: "adicionar", content: "Item 2" })}
      >
        +
      </button>
      <p>{state}</p>
    </div>
  );
};
