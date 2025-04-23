// - Validação

// - useForm
//da pra usar o padrão onBlur e criar uma validação para cada formulário mas não seria otimizado, pra isso, vamos criar o nosso próprio hook de validação de formularios:

//useForm.jsx
import React from "react";

const types = {
  cep: {
    regex: !/^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true //para campos que não sao necessarios/required como sobrenome
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) { //verificar se types[type] existe antes para o caso de ser nome que não precisa de regex
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;

// App.jsx
const App = () => {
  const cep = React.useForm("cep");
  const email = React.useForm("email");
  const nome = React.useForm(); //caso nao queira verificar com regex
  const sobrenome = React.useForm(false); 




  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) { //lembrar de validar para cada campo que é necessário
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }
  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="cep">Cep</label>
      <input id="cep" type="text" placeholder="00000-000" {...cep} /> //...cep -
      espalha os métodos do return do useForm

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="exemplo@gmail.com" {...email} />

      <label htmlFor="nome">Nome</label>
      <input id="nome" type="nome" placeholder="Nome" {...nome} />

      <label htmlFor="sobrenome">Sobrenome</label>
      <input id="sobrenome" type="sobrenome" placeholder="Sobrenome" {...sobrenome} />
      <button>Enviar</button>
    </form>
  );
};

// Input.jsx
import React from 'react';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
