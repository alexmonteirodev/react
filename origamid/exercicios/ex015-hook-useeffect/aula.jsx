// - useEffect

//resumindo: O que ele faz é executar algum código depois da renderização, ou seja, atualizar informações online de state sem ter que dar refresh e se esse código mudar algum state (useState), aí sim da pra usar o useState pra renderizar isso. Serve para mudar o state online sem precisar dar refresh de acroodo com a condição que eu passar no segundo argumento

// Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

// useEffect tem dois parametros:
// O primeiro argumento que deve ser passado uma função que será executada (callback).

const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    //primeiro argumento (callback)
    console.log("Ocorre ao renderizar e ao atualizar");
  });

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

// No segundo argumento, temos umas array de 'dependencias', basicamente a array diz: se o estado da array mudar, execute a função novamente e se não mudar não executa novamente.

const App1 = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log(
      "Ocorre ao renderizar e ao atualizar apenas uma vez pois não há uma condição na array"
    );
  }, []); //segundo argumento (condicional)

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

//logo, um exemplo de uso seria: quando quiser pucar dados de um servidor, assim que o elemento for renderizado (ex: um site que mostra uma lista de produtos), logo, assim que for renderizado inicialmente eu quero fazer uma busca dos produtos à venda, mas não quero ficar buscando os produtos à venda toda vez que um estado mude pra não sobrecarregar. Exemplo:

const App2 = () => {
  const [contar, setContar] = React.useState(0);

  // Uma Array vazia indica que o efeito não possui nenhum dependência, assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log("Apenas quando renderiza");
  }, []);

  // Agora a dependência está no estado contar, assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    console.log("Toda vez que atualiza o contar");
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
//------------------------------------------------------------------------

// - Dependências Obrigatórias
// Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

const App3 = () => {
  const [contar, setContar] = React.useState(0);

  const titulo = "Clicou "; //titulo é usado no useEffect, logo se torna uma dependencia e deveria ser passado no array mas por ser uma dependencia estatica porque a string 'clicou' não vai mudar, não faz diferença mas a dependencia contar sim, porque ela muda o estado, então deve ser passada nas dependencias.

  React.useEffect(() => {
    document.title = titulo + contar;
    // O ESLint irá indicar que você possui uma dependência não declarada (contar), caso não tenha add nas dependencias
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

// - Componente "Montou"
// O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

const App4 = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente fosse atualizado, o mesmo seria executado
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []); //[] sem dependendicas para executar uma unica vez, sem ela, executaria uma atras da outra, como num loop

  return (
    <div>
      {dados && ( //lembrar de sempre verificar se dados existe porque se o fetch demorar um pouquinho que seja, da erro porque ao usar dados.nome, acessamos o json e se ele não tiver carregado ele vai buscar dados.nome de null porque é o valor que o useState tem
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

// - Múltiplos Efeitos
// Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.

const App5 = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = "Total " + contar;
  }, [contar]);

  React.useEffect(() => {
    setContar(0);
  }, [modal]);

  return (
    <div>
      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

// - Antes de Desmontar
// As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.
//no caso abaixo, quando add o eventListener de scroll, toda vez que clica no botao é adicionado um evento novo e isso vai sujando o dom porque esta add um atras do outro porque ele ta iniciando a ação quando clica, então, pra isso não ocorrer tem que passar um callback no return da função do useEffect para remover o evento, então basicamente criamos o event, usamos e apagamos depois de usar. Isso otimiza o código.

// Produto.js
const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener("scroll", handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      //essa função só ocorre quando o elemento some da tela
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <p style={{ height: "200vh" }}>Produto</p>;
};

//App.js
const App6 = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
};
