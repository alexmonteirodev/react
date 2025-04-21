// Formulários - input

// - Reatividade
// Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.

const App = () => {
  const [nome, setNome] = React.useState("");

  return (
    <form>
      <label htmlFor="nome">Nome</label> //obs: htmlFor ao invés de somente
      'for' e sempre o for e o id com mesmo nome para quando o user clicar na
      label, acionar o input
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <p>{nome}</p>
    </form>
  );
};
//----------------------------------------------------------------------------------

// - Form
// No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".
const App2 = () => {
  const [nome, setNome] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }

  return (
    <form onSubmit={handleSubmit}>
      //passando evento direto no form, assim, esse evento funciona ao clicar no
      btn ou apertar enter
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <button>Enviar</button> //obs: não precisa botar o evento no botão, pode
      botar direto no form, pq ele já é o que o botão vai fazer, porque o btn ta
      dentro do form.
    </form>
  );
};
//----------------------------------------------------------------------------------

// - Múltiplos Campos
// Podemos definir um estado para cada campo. por exemplo, um para nome e um para email.
const App3 = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email" //type emai o proprio js confere se está no padrão de email. (verifica se o que o user escreveu possui '@')
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

//----------------------------------------------------------------------------------

// - Objeto
//Podemos definir um objeto que irá conter todos os valores dos campos do formulário. Seria outra alternativa para não ter que criar um estado para cada input. Fica mais complexo mas em geral das duas formas estaria correto, usando objeto ou criando um estado para cada (exemplo anterior)
const App4 = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};
