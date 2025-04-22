// - Radio
//obs: não é a tag radio e sim um input com o type radio.
//deve se atentar ao estado do que está checkado pq isso que importa na reatividade, não os valores, pois eles são estáveis, ou seja, notebook, tablet, vão ser sempre eles, mas o que for checkado não.
//No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.
const App = () => {
  const [radio, setRadio] = React.useState("");

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>

      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>

      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === "tablet"}
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
};
// como o input tem que estar dentro label para ficar um item ao lado do outro, nao precisa do for, poruqe assim, ao clicar no label, ja seleciona o input.
//no momento, o form permite checar as 3 opções, pq elas não fazem parte de um crupo, para dar apenas uma opção de check, tem que ser de um grupo e pra definir o grupo existem duas formas:

//  1 - basta por todas com o atributo name e o mesmo nome pras 3:

<form>
  <label>
    <input
      type="radio"
      value="notebook"
      name="produto"
      checked={radio === "notebook"}
      onChange={handleChange}
    />
    Notebook
  </label>

  <label>
    <input
      type="radio"
      value="smartphone"
      name="produto"
      checked={radio === "smartphone"}
      onChange={handleChange}
    />
    Smartphone
  </label>

  <label>
    <input
      type="radio"
      value="tablet"
      name="produto"
      checked={radio === "tablet"}
      onChange={handleChange}
    />
    Tablet
  </label>
</form>;

//  2 - conferindo se o valor bate com o setRadio: checked={radio === "notebook"}:
<form>
  <label>
    <input
      type="radio"
      value="notebook"
      checked={radio === "notebook"}
      onChange={handleChange}
    />
    Notebook
  </label>

  <label>
    <input
      type="radio"
      value="smartphone"
      checked={radio === "smartphone"}
      onChange={handleChange}
    />
    Smartphone
  </label>

  <label>
    <input
      type="radio"
      value="tablet"
      checked={radio === "tablet"}
      onChange={handleChange}
    />
    Tablet
  </label>
</form>;
