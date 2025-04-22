// - Input
// Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.

//App.js
const App = () => {
  const [nome, setNome] = React.useState(""); //criar o estado no App e não no componente input

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
        required // linka pelo props
      />
    </form>
  );
};

//Input.js
const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props} //pra espalhar o resto das propriedades, agora pode por required na tag do input  e nao precisa passar como props. Pode fazer isso para todos os valores que são iguais.
      />
    </>
  );
};
