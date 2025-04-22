// - Select
//lembrar que select é aquele input que tem uma lista de itens dentro dele.
// O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.
const App = () => {
  const [select, setSelect] = React.useState("");

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

// <option disabled value="">Selecione</option> serve para dar match com o valor do select do useState inicial, porque caso essa opcao nao existisse, teria que rescrever manualmente um valor inicial, ex:

const App2 = () => {
  const [select, setSelect] = React.useState("notebook");

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};
//assim, ja teria o item notebook selecionado, porque caso estivesse com React.useState(""); sem nada no valor, no form estaria selecionado o notebook mas no useState nao teria nada, vou seja, pro usuario parece que esta selecionado mas o react nao capta nada, pq a string estaria vazia. POr isso usar o <option disabled value="">Selecione</option>, e o disabled pra dizer que não tem nenhum valor selecionado.
