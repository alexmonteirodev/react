// - React Element
// Todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.

function App() {
  return <div id="container">Meu App</div>;
}
// É transformado em:
function App() {
  return React.createElement("div", { id: "container" }, "Meu App");
}

//Babel: https://babeljs.io/repl
//-----------------------------------------------------------------------------------------

// - Componentes
//Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React.
//depois é só ir acrescentando os componentes ao appp (olhar index.html)
//obs: é considerado boa prática dar nome a um compotente com a primeira letra em maiúscula

// Function Component
const Button0 = () => {
  return <button>Comprar</button>;
};
//-----------------------------------------------------------------------------------------

// - Composição
//O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes que podem ser reutilizados.

const Button = () => {
  return <button>Comprar</button>;
};

const MainNav = () => {
  return (
    <nav>
      <a href="#">Link 1</a>
      <Button />
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <MainNav />
      <Button />
    </div>
  );
};
//-----------------------------------------------------------------------------------------

// - JavaScript {}
//Utilizamos as {} para executar expressões de JavaScript e mostrar o resultado no DOM.

const Produtos = () => {
  const produto1 = "camisa";
  const produto2 = "bermuda";

  return (
    <div>
      <button>{produto1}</button>
      <button>{produto2}</button>
    </div>
  );
};

//lembrando: mesma coisa que:
// const Produtos = function (params) {

// }
//-----------------------------------------------------------------------------------------

// - Eventos
//Podemos atribuir eventos diretamente aos elementos/atributos.

//repare que como o evento é uma expressão JS, se usa {} para add.

const Produtos2 = () => {
  const produto1 = "camisa";
  const produto2 = "bermuda";

  return (
    <div>
      <button onClick={handleClick}>{produto1}</button>
      <button>{produto2}</button>
    </div>
  );
};

function handleClick(event) {
  console.log(event);
}
//-----------------------------------------------------------------------------------------

// - Hooks
//Utilizamos o React pela facilidade de sincronização do estado. Os Hooks são funções especiais de React, o useState possibilita a sincronização do estado.

const Compras = () => {
  const contar = React.useState(0);

  console.log(contar); // retorna [0,f] - primeiro elemento (0), é o estado inicial - geralmente é chamado de count; o segundo elemento é uma função e é com ela que se atualiza o estado - geralmente é chamado de setNomedoprimeiro, no caso: setCount

  return (
    <div>
      <button onClick={handleClickCount}>Comprar: {}</button>
      <p>Total: {count}</p>
      <p>Preço: {count * 100}</p>
    </div>
  );
};

const Comprar = () => {
  const [count, setCount] = React.useState(5); //desestruturar, pq o useState retorna [x, f], sendo count = x e setCount = f
};

function handleClickCount() {
  setCount(count + 1);
}

//e isso gera reatividade/sincronização porque quando eu atualizo o count, ele já atualiza todos os outros componentes, sendo o total, e o preço
