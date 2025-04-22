// - Textarea
// No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.
const App = () => {
  const [mensagem, setMensagem] = React.useState("");

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5" //escolhe quantidade de linhas
        onChange={({ target }) => setMensagem(target.value)} //target = event desestruturado
      />
      <p>{mensagem}</p>
    </form>
  );
};
