import React from "react";
import "./form.css";

const Form = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [feedback, setFeedback] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    const form = {
      nome: e.target[0].value,
      email: e.target[1].value,
      senha: e.target[2].value,
      cep: e.target[3].value,
      rua: e.target[4].value,
      numero: e.target[5].value,
      bairro: e.target[6].value,
      cidade: e.target[7].value,
      estado: e.target[8].value,
    };
    console.log(form);

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => {
        if (!r.ok) {
          console.log("deu erro");
          return;
        } else {
          return r.json();
        }
      })
      .then((r) => {
        setFeedback(true);
        console.log(r);
      });
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        value={nome}
        type="text"
        id="nome"
        onChange={(event) => setNome(event.target.value)}
      />
      <p>{nome}</p>

      <label htmlFor="email">Email:</label>
      <input
        value={email}
        type="email"
        id="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{email}</p>

      <label htmlFor="senha">Senha:</label>
      <input
        value={senha}
        type="password"
        id="senha"
        onChange={(event) => setSenha(event.target.value)}
      />
      <p>{senha}</p>

      <label htmlFor="cep">cep:</label>
      <input
        value={cep}
        type="text"
        id="cep"
        onChange={(event) => setCep(event.target.value)}
      />
      <p>{cep}</p>

      <label htmlFor="rua">rua:</label>
      <input
        value={rua}
        type="text"
        id="rua"
        onChange={(event) => setRua(event.target.value)}
      />
      <p>{rua}</p>

      <label htmlFor="numero">numero:</label>
      <input
        value={numero}
        type="number"
        id="numero"
        onChange={(event) => setNumero(event.target.value)}
      />
      <p>{numero}</p>

      <label htmlFor="bairro">bairro:</label>
      <input
        value={bairro}
        type="text"
        id="bairro"
        onChange={(event) => setBairro(event.target.value)}
      />
      <p>{bairro}</p>

      <label htmlFor="cidade">cidade:</label>
      <input
        value={cidade}
        type="text"
        id="cidade"
        onChange={(event) => setCidade(event.target.value)}
      />
      <p>{cidade}</p>

      <label htmlFor="estado">estado:</label>
      <input
        value={estado}
        type="text"
        id="estado"
        onChange={(event) => setEstado(event.target.value)}
      />
      <p>{estado}</p>

      {feedback && feedback.ok ? <p>enviado corretamente</p> : <p></p>}

      <button>Enviar</button>
    </form>
  );
};

export default Form;
