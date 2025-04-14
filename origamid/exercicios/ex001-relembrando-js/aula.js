// - Tudo é Objeto
// Um objeto possui propriedades e métodos que podem ser diretos ou herdados (protótipo).

// Objeto Literal
const menu = {
  selector: ".principal",
  active() {
    const menuElement = document.querySelector(this.selector);
    // menuElement.classList.add("active"); //comentei pq tava dando erro
  },
};

menu.selector; // ".principal";
menu.active(); // adicionar active ao menu
menu.hasOwnProperty("class"); // método herdado

["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao Body

// obs: Todo objeto possui um protótipo, menos o null e o undefined (este não é um objeto).
//-----------------------------------------------------------------------------------------

// - Arrow Function
// A principal diferença é o contexto do this. A arrow function não cria o próprio this. Ela fura o escopo e busca o this anterior.

//upperName("André"); // Erro pq upperName é uma expression, ou seja, criada uma variavel, logo, ela tem que ser declarada antes de ser usada. se fosse apenas uma função ela sofreria hoosting e armazenada na memória de inicio.
const upperName = function (name) {
  return name.toUpperCase();
};
upperName("André"); // ANDRÉ

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName("Rafael"); // rafael

const countLetters = (word) => word.length;
countLetters("Rafael"); // 6
//-----------------------------------------------------------------------------------------

// - Destructuring
// Desestruturar objetos e arrays.

//objetos:
document.addEventListener("click", (e) => {
  //como é feito normalmente:
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);

  //com destructuring:
  const { clientX, clientY } = e;
  console.log(clientX, clientY);
});

// também podemos desestruturar direto no parâmetro
document.documentElement.addEventListener("mousemove", handleMouseMove);
function handleMouseMove({ clientX, clientY }) {
  //porém perde acesso ao event
  // console.log(clientX, clientY);
}

//arrays:
const frutas = ["banana", "Uva"];
const [fruta1, fruta2] = frutas;
fruta1; //banana
fruta2; //Uva

//outro exemplo seria:

const usePerimetro = [
  4,
  function perimetro(lados) {
    return 4 * lados;
  },
];

const [lados, perimetro] = usePerimetro;
lados; // 4
perimetro; //function perimetro
perimetro(lados); //16
//-----------------------------------------------------------------------------------------

// - Rest e Spread
// Rest:

function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList("Google", "André", "Pedro", "João");

//Spread:

// Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
Math.max(...numeros); // retorna 20

// Transformar ArrayLike and Array
const items = document.querySelectorAll("li");

// items.map() não existe, agora [...items] é uma nova array, com cada elemento de items.
[...items].map((item) => (item.innerText = "Teste"));

// Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };
//-----------------------------------------------------------------------------------------

// - Fetch
// Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
//-----------------------------------------------------------------------------------------

// - Async / Await (mesma coisa que o fetch porém com uma sintaxe mais limpa)
// Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

async function fetchComAsync(url) {
  const promise = await fetch(url);
  const json = await promise.json();
  return json;
}
console.log(fetchComAsync("https://ranekapi.origamid.dev/json/api/produto"));
//-----------------------------------------------------------------------------------------

// - Arrays (Map e Filter)
// Métodos para iterarmos entre os valores de arrays.

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

// Retorna uma array nova, que contem os items em que o retorno da função for verdadeiro
const precosFiltro = precos.filter((preco) => preco.includes("R$"));
precosFiltro; //['R$ 200', 'R$ 400', 'R$ 300', 'R$ 400']

// Retorna uma nova array, modificada com o retorno de cada item da função
const precoNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$ ", ""))
);
precoNumeros; //[200, 400, 300, 400]

//obs: map nem filter alteram a array original precos
precos; //['Crédito', 'R$ 200', 'R$ 400', 'Contas Pagar', 'R$ 300', 'R$ 400', 'Meus dados']
//-----------------------------------------------------------------------------------------

// - Expressões
//algumas situações do react, ele só aceita expressões, logo, não da pra usar o if e tem entao que usar o ternário ou o lance do &&

const grupoA = 100; //ex: 100 é uma expressão, poderia continuar essa expressao dizendo 100*2 por exemplo
const grupoB = 300;
const vencedor = grupoA > grupoB ? "Grupo A Venceu" : "Grupo B Venceu";

const numeros2 = [2, 3, 4, 5, 6];
const total = numeros2.filter((numero) => numero > 4);

const active = true;
const button = active && "Botão está ativo"; //se o active for false ele nem continua a ver que que tem depois do &&.
