// - Validação

// - onBlur
//O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com JavaScript utilizando REGEX.

//app.jsx
const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  //para verificar no onchange
  function handleBlur({ target }) {
    validateCep(target.value);
  }

  //para verificar depois que o user digitou e tirar o erro da tela
  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  return (
    <form>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

// - onSubmit
// Devemos impedir o envio do formulário caso exista erro no preenchimento.

const App2 = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }
  return (
    //lidando com o erro pq no onchange ao clicar enter envia o formulario, pra isso temos o onSubmit
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">Cep</label>
      <input
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};
