// - Eventos
// Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React (evento proprio que o react mesmo criou) porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta). Esse é o diferencial. (inclusive repare que quando der console.log em um event do react, ele possui as mesmas propriedades e tudo, mas aparece como classe e quando é add um evento direto no window, apareece como event normal porque se está usando JS puro)

//basicamente é passar como passar no JS o evento inline

const App = () => {
  function handleClick(event) {
    alert("Comprou: " + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

// lista dos eventos de react: https://legacy.reactjs.org/docs/events.html
//----------------------------------------------------------------------------

// - Função Anônima
// É possível executar uma função anônima no evento.

<button
  onClick={function name(params) {
    console.log("teste");
  }}
></button>;

//evolui para:

//<button onClick={() => { console.log('teste')}}></button>

// logo, temos:

const App2 = () => {
  return (
    <button onClick={({ target }) => target.classList.toggle("ativa")}>
      Ativar
    </button>
  );
};
//----------------------------------------------------------------------------

// - window/document
// Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.

const App3 = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener("scroll", handleScroll);

  return <div style={{ height: "200vw" }}>Div</div>;
};

// Esse tipo de evento será adicionado com o hook useEffect
