// obs: são hooks pouco utilizados

// - useMemo
// Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.
//primeiro recebe uma função de callback cujo o valor retornado vai ficar salvo na variavel (const)
// segundo recebe uma array de dependencias como no useEffect

const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem("produto");
    console.log("teste"); //só roda na renderização inicial
    return localStorageItem;
  }, []);
  console.log(valor); //roda toda vez que clica no botão

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

//obs: Serve para casos em que você faz uma operação lenta para retornar um valor. ex: fazendo o exemplo de operação lenta com JS, um calculo demoraria 100 milisegundos para acontecer (é considerado super lento) e com o react ele faz uma vez, demora 170 milisegundos e após isso ele salva o valor na memória e a partir daí os próximos são 0.4 milisegundos. da pra ter essa noção usadno o performance.now()

//teste calculo lento:
function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App2 = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};

// - useCallback
// Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.
const App3 = () => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1); //passou o contar dentro do set pq se usasse na dependencia seria igual uma função normal, porque iri recriar toda vez, como uma f normal
  }, []);

  return <button onClick={handleClick}>{contar}</button>;
};
