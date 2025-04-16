// - JSX Arrays

// O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

const App = () => {
  const produtos = ["Notebook", "Smartphone", "Tablet"];

  return <p>{produtos}</p>; //NotebookSmartphoneTablet
};

// - Keys
// O JSX necessita de uma key única para cada elemento da Array. https://reactjs.org/docs/lists-and-keys.html

const App2 = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};

// - Map
// É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
//obs: o segundo parametro do map é o index, então pode passar o index tbm na key mas em alguns casos pode dar problema.

const App3 = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

// - Array de Objetos
// O cenário mais comum é trabalhar com array's de objetos.

const App4 = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};
// repare que a chave semre vai no elemento pai.
// obs: poderia desestruturar e ao inves de usar livro.nome, lirvro. alguma coisa toda hora poderia passar .map(({nome, ano}) e só usar nome a ano.

// - O que o React aceita
// Se for uma array de objetos, e o React não sabe como renderizar objetos diretamente no JSX. e array de objetos é o que mais vai pegar no dia a dia, se colocar se passar isso no App {produtos}, vai dar erro ' Objects are not valid as a React child', mas se passar no App {produtos.nome}, ai sim ele vai ler porque é uma string.

// React só consegue renderizar:
// 	•	strings
// 	•	números
// 	•	elementos JSX
// 	•	arrays contendo os itens acima (ex: ['banana', 'uva'])
//------------------------------------------------------------------

// Exercícios:

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

//solução funcionou mas tem alguns problemas, comparar com a do professor (essa foi minha primeira versão)
const AppPrimeiraVersao = () => {
  return (
    <>
      <div>
        {produtos
          .filter((params) => Number(params.preco.replace("R$ ", "")) > 1500)
          .map((produto) => {
            console.log(produto);
            return (
              <div key={produto.nome}>
                <h1>{produto.nome}</h1>
                <p>{produto.preco}</p>
                <ul key={produto.cores}>
                  <li style={{ background: produto.cores[0], color: "white" }}>
                    {produto.cores[0]}
                  </li>
                  <li style={{ background: produto.cores[1], color: "white" }}>
                    {produto.cores[1]}
                  </li>
                  <li style={{ background: produto.cores[2], color: "white" }}>
                    {produto.cores[2]}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

// versão desestruturadada (esssa foi minha segunda versão):
const AppSegundaVersao = () => {
  return (
    <>
      <div>
        {produtos
          .filter((params) => Number(params.preco.replace("R$ ", "")) > 1500)
          .map(({ nome, preco, cores, id }) => {
            // o produto retorna um objeto com { nome, preco, cores, id }, por isso se desestrutura assim, e trabalha melhor
            // console.log(nome, preco, cores, id);
            return (
              <div key={nome}>
                <h1>{nome}</h1>
                <p>{preco}</p>
                <ul key={cores}>
                  <li style={{ background: cores[0], color: "white" }}>
                    {cores[0]}
                  </li>
                  <li style={{ background: cores[1], color: "white" }}>
                    {cores[1]}
                  </li>
                  <li style={{ background: cores[2], color: "white" }}>
                    {cores[2]}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

//versão final (essa foi minha terceira versão):

const AppTerceiraVersao = () => {
  return (
    <>
      <section>
        {produtos
          .filter((p) => Number(p.preco.replace("R$ ", "")) > 1500)
          .map(({ id, nome, preco, cores }) => (
            <div key={id}>
              <h1>{nome}</h1>
              <p>preço: {preco}</p>
              <ul>
                {cores.map((cor) => (
                  <li key={cor} style={{ background: cor, color: "white" }}>
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </>
  );
};

//solução professor:

const App6 = () => {
  return (
    <section>
      {produtos
        .filter((produto) => Number(produto.preco.replace("R$ ", "")) > 1500)
        .map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: "white" }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

// o que aprendi?

// 1 - desestruturar é deboa. se tem um objeto, basta olhar as propriedades que ele tem e colocar elas em uma {} e depois usar elas direto sem ter que ficar acessando a propriedade.algumaCoisa toda hora.

// 2 - react não retorna objeto, é legal trabalhar uma função fora da App e dar um console log para ver e não se perder pelo objeto. Por tanto engloba a {} com o objeto dentro em algum elemento e daí faz o map e se guia pelo console log da função de fora: <div>{produtos.map}</div>

// 3 - a key tem que ser usada no elemento pai, não precisa usar key em todo elemento

// 4 - react retorna o objeto de cada um já direto sem precisar de foreach, então basta ir acessando as propriedades direto. Se a array tiver um objeto dentro vai dar erro mas se acessar a string do objbeto não vai dar erro: const nomes = [{nome: 'alex'}] -> se jogar {nomes} no react vai dar erro porque ele não renderiza objeto, só array, string e numero, então se jogar {nomes[0].nome} ai sim da certo.

// 5 - no App react ja tem o return () lá em cima, pra retornar tudo que tem dentro do app, porém se der um map em algum objeto, e no callback do map, passar uma function, ela é uma function, ou seja, precisa retornar algo, logo, teriamos:

// const App = ()=>{
//     return (
//         <div>{produtos.map(function name(params) {
//             return 'function tem que ter um return'
//         })}</div>
//     )
// }

//porém, se formos analizar e deixar essa function menor, poderiamos simplificar ela assim:

// const App = ()=>{
//     return (
//         <div>{produtos.map(function name(params) {return 'function tem que ter um return'})}</div>
//     )
// }

//tirando os espaços e recuando, e quando faz isso, como ela só tem um elemento não precisa de return, ficaria assim:

// const App = ()=>{
//     return (
//         <div>{produtos.map((params) => 'function tem que ter um return')}</div>
//     )
// }

//logo, se ela não precisa de return quando tem um elemento, podemos criar uma div (já que é react), e construir tudo lá dentro, assim teremos várias coisas lá dentro e a function verá como apenas um item, foi o que ocorreu no exercicio acima. Obs: de quebra esse unico elemento acaba se tornando o elemento pai, então já da pra engatar a key nele, olha como tudo se encaixa.

//relato: fiquei muito feliz com essa aula, aprendi bastante, só continua! Vai pra cima e não larga o osso!
