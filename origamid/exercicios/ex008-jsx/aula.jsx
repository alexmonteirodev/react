// - JSX (é uma sintaxe)
// Basicamente o jsx é uma extensão de sintaxe JS que permite escrever JS misturado com elementos html/XML e que depois esses elementos são convertidos (através de um transpiler, por ex: babel) para funções de React (React.function)

const App = () => {
  return <button>Comprar</button>;
};

// É transformado em

const App1 = () => {
  return React.createElement("button", null, "Comprar");
};
//--------------------------------------------------------------------

// - Funcionalidades Internas

// - Atributos
// Atributos podem ser passados como no HTML, porém com alguns casos especiais.

const App2 = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};

// - Casos Especiais
// O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className. Assim como o For que vira htmlFor.

const App3 = () => {
  return <div className="grid">Origamid</div>;
};

const App4 = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};

// - React.Fragment
//Na function só pode retornar um elemento único, no App4 retornamos 2 (label e input) porque estão dentro de um unico elemento form (se não daria erro), então caso queira retornar mais de um elemento tem que envolver em uma div ou outra tag ou no React.Fragment (no caso do React.Fragment, uma sintaxe alternativa seria <> x </>), é melhor usar o fragment para não sujar o código com Divs que não precisam porque se não em cada module tiver uma div pra englobar o código já começa a sujar tudo:

const App5 = (params) => {
  return (
    <React.Fragment>
      <div>teste 1</div>
      <div>teste 2</div>
    </React.Fragment>
  );
};

// mesma coisa que:

const App6 = (params) => {
  return (
    <>
      <div>teste 1</div>
      <div>teste 2</div>
    </>
  );
};

// - camelCase
// Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.

const App7 = () => {
  return <video autoPlay />;
};

// - Expressões / Variáveis
// O grande poder do JSX é poder utilizar dentro do HTML, funções JS.
// Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.

const App8 = (params) => {
  const nome = "Andre";
  const valorA = 1;
  const valorB = 5;
  const ativo = true;
  return (
    <>
      <p>{nome}</p> //varável - retorna Andre
      <p>{(valorA * valorB) / 2}</p> //expressão - retorna 2.5
      <p className={ativo ? "ativo" : "inativo"}>add classe ativo</p>{" "}
      //expressão
    </>
  );
};
//--------------------------------------------------------------------

// - JSX Expressões
// Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos e function (função sem ativar()) irão retornar um erro.

const App9 = () => {
  function meuNome() {
    return "André";
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: "Ford",
  };

  return (
    <div>
      <p>{"MINHA EMPRESA".toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => "Função Executada")()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? "Fórmula correta" : "Fórmula incorreta"}</p>
      <p>{quadrado(2) === 4 && "Fórmula correta"}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};
//--------------------------------------------------------------------

// - Style
// O style irá receber um objeto com as propriedades do elemento em camelCase. É como se fosse o css inline, mas da pra importar o css normalmente também.

const App10 = () => {
  const estiloH1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica",
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: "green" }}>Sempre aberta</p>
    </div>
  );
};
//--------------------------------------------------------------------

// - Exercícios:

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const styleAtivo = {
    color: "green",
  };
  const styleInativo = {
    color: "red",
  };

  const totalGasto = (dados) => {
    const dadosCompras = dados.compras;
    let valorFinal = 0;
    dadosCompras.forEach((params) => {
      const valores = +params.preco.replace("R$", "");
      valorFinal = valorFinal + valores;
    });
    return valorFinal;
  };

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        {dados.ativa ? (
          <span style={styleAtivo}> Ativo</span>
        ) : (
          <span style={styleInativo}> Inativo</span>
        )}
      </p>
      <p>Total gasto: R$ {totalGasto(dados)}</p>
      <p>{totalGasto(dados) > 10000 ? "Você está gastando muito." : ""}</p>
    </>
  );
};

// solução professor:

const App2 = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};
