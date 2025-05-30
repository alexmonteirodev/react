// - React e JavaScript
// Comparação entre um App com React e outro com JavaScript Puro

// - JavaScript (667 caracteres)

{
  /* <div id="app-javascript">
  <p>Total: <span id="total"></span></p>
  <p>Preço: R$ <span id="preco"></span></p>
  <button id="button">Comprar</button>
</div>

<script type="application/javascript">
  const button = document.getElementById('button');
  const total = document.getElementById('total');
  const preco = document.getElementById('preco');

  let contador = 1;

  function atualizarValores(contador) {
    total.innerText = contador;
    preco.innerText = contador * 250;
  }
  atualizarValores(contador);

  function handleClick() {
    contador = contador + 1;
    atualizarValores(contador);
  }

  button.addEventListener('click', handleClick);
</script> */
}

//------------------------------------------------------------------------------

// - React (428 caracteres)

{
  /* <div id="app-react"></div>

<script type="text/babel">
  const Comprar = () => {
    const [contador, setContador] = React.useState(1);

    return (
      <div>
        <p>Total: {contador}</p>
        <p>Preço: R$ {contador * 250}</p>
        <button onClick={() => setContador(contador + 1)}>Comprar</button>
      </div>
    );
  };

  ReactDOM.createRoot(document.getElementById('app-react')).render(<Comprar />);
</script> */
}

//------------------------------------------------------------------------------

//em resumo o react é mais enxuto (menos linhas de codigo) e é sincronizado, que é o grande diferencial, sem ter que ficar selecionando variáveis como no js por exemplo.
