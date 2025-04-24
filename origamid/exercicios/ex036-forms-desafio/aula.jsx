// criar um quest:
const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

//questões que ficaram pendentes para resolver.

// 1 - da pra dar proxima sem responder

// 2 - mostrar resultado no fim

// minha versão, a versão do código já é a do professor.
const App = () => {
  const perguntas = [
    {
      pergunta: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      resposta: "React.createElement()",
      id: "p1",
    },
    {
      pergunta: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: "p2",
    },
    {
      pergunta: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      resposta: "useFetch()",
      id: "p3",
    },
    {
      pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      resposta: "use",
      id: "p4",
    },
  ];

  const [pergunta, setPergunta] = React.useState(0);
  const [respostaAtual, setRespostaAtual] = React.useState("");
  const [respostaArr, setRespostaArr] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [resultado, setResultado] = React.useState(null);

  function handleClick(e) {
    e.preventDefault();

    //seta o erro se a opção está selecionada antes de prosseguir
    if (!respostaAtual) {
      setError(true);
      return;
    }

    //passa para próxima pergunta
    setPergunta(pergunta + 1);

    //captura resposta e salva na array resposta
    setRespostaArr([...respostaArr, respostaAtual]);
  }

  //calcula resultado
  const resultadosArr = perguntas.map((results) => {
    return results.resposta;
  });
  if (pergunta >= perguntas.length) {
    const acertos = respostaArr.filter(
      (resposta, index) => resposta === resultadosArr[index]
    );
    const resultado = acertos.length;
    setResultado(resultado);
  }

  const perguntaAtual = perguntas[pergunta];
  return (
    <>
      <form action="">
        <h1>{perguntaAtual.pergunta}</h1>
        {perguntaAtual.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              onChange={({ target }) => {
                setRespostaAtual(target.value);
                setError(false);
              }}
              checked={respostaAtual === option}
            />
            {option}
          </label>
        ))}
        {error ? (
          <p>Você deve preencher todos os campos antes de continuar.</p>
        ) : (
          ""
        )}
        <button onClick={handleClick}>Próxima</button>
      </form>

      {resultado !== null && pergunta >= perguntas.length && (
        <h2>Resultado: {resultado}</h2>
      )}
    </>
  );
};
