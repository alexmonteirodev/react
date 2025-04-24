// - Animações

// - Animation
//Anime a entrada de elementos utilizando a propriedade animation.
.animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards; //forwards = ao final da animação que o elemento fique no seu estado final
  }
  
  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }

// App.js
  
  const App = () => {
    const [ativar, setAtivar] = React.useState(false);
  
    return (
      <div>
        <button onClick={() => setAtivar(!ativar)}>Ativar</button>
        {ativar && <Produto />}
      </div>
    );
  };

// Produto.js
  
  const Produto = () => {
    return (
      <div className="animeLeft">
        <h1>Notebook</h1>
        <span>R$ 2000</span>
      </div>
    );
  };