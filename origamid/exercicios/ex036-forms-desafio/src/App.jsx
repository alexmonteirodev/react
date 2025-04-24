import React from "react";
import Radio from "./Radio";
import "./style.css";

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

const App = () => {
  // - states
  //setar respostas
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  //setar index do slide ativo no momento
  const [slide, setSlide] = React.useState(0);

  //setar resultado
  const [resultado, setResultado] = React.useState(null);

  // - functions
  //f que atualiza resposta checkada
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  //f calcula resutado
  function resultadoFinal() {
    console.log("final");
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}.`);
  }

  //f que controla index dos slides das perguntas
  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal(); //verifica resultado porque chegou no final do questionario (else)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          onChange={handleChange}
          value={respostas[pergunta.id]}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <h2>{resultado}</h2>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default App;
