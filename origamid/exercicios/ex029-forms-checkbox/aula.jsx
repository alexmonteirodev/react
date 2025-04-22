// - Checkbox
// é um input do type checkbox
// O estado do checkbox está relacionado ao checked.
const App = () => {
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChange({ target }) {
    setCheckbox(target.checked); //retorna true or false se ta marcado ou não
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={checkbox}
          onChange={handleChange}
        />
        Aceito os termos.
      </label>
    </form>
  );
};

// - Múltiplos itens
// Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.
const App2 = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]); //...cores (valores anteriores, ou seja, nada), target.value (novo valor). porém como é um evento toda vez que der change vai adicionar um target.value na array e não só quando checkar, pra isso, temos o if (target.checked), isso resolve a parte de quando clicar no input deschekado ele adicionar um novo item ao array mas não a parte de quando estar checkado, logo, se clicamos em vermelho ele add e depois em azul, ele tbm add no estado do componente, pra isso temos o: else, pra remover o que não estiver marcado
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }
  // já o checked serve para ter o controle do que está realmente checkado ou não n estado, pq se tivesse uma preferencia inicial no useState('vermelho'), o vermelho já estaria checkado sem o usuario checkar e no checked passa um verficiação se na array dos itens selecionados, ou seja, cores, possui o item checkado: checked={cores.includes('vermelho')}
  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked("verde")}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked("amarelo")}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked("roxo")}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
