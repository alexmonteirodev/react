// - useRef
// Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    //sem o useEffect retorna undefined, pq não renderizou e com o useEffect conseguimos acessar o componente renderizado online
    console.log(video.current);
  }, []);

  return <video ref={video}></video>;
};

// - focus()
// É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

const App1 = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

// - Referência
// O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.

//no exemplo aaixo: usamos o setTimeout para criar uma notificação via useState para renderizar na tela quando clicar no botão e ser um feedback para o cliente. E a referencia seria uma boa aqui pq? porque quando se cria um timeout para remover a notificacao e eu clico para adicionar mais um item, ele cria mais uma notificacao, logo, acabam tendo varias notificações, então a solução seria criar a notificação e limpar a anterior para termos apenas uma, e pra isso teriamos que ter uma let, iniciando em 0, do lado de fora do ecopo definida como referencia de cada notificação e depois poderiamos por pra clearTimeout(referencia), porém no react toda vez que renderizar a tela, a let volta a ser 0 e dessa forma toda vez que renderizar a let vira zero e buga outra vez. Pra resolver isso teriamos entao que usar o useRef.

const App3 = () => {
  const [contar, setContar] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao("Item adicionado ao carrinho");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};
