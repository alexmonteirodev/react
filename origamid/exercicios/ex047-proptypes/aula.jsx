// - PropTypes
// O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos.

//basicamente quando vc usa props e puxa um valor dos props por exemplo width={300}, que é um number, e cria a lógica no Button.jsx, esperando um number tudo bem. Mas vamos supor que depois alguém vai dar manutenção no site e quer mudar a width pra 250 e ao invés de passar width={250}, passa width='250', não iria funcionar e não acusaria erro. Pra isso o proptypes existe para definir qual vai ser o tipo de dado esperado e caso não seja, da um erro para saber o que está acontecendo e onde.

//No Vite é necessário instalar o pacote prop-types. - npm install prop-types

// https://reactjs.org/docs/typechecking-with-proptypes.html
//obs: JS não é uma linguagem tipada, ou seja, não temos que definir qual tipo de dado que está vindo

//Button.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;

// App.jsx
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <Button margin="10px" width={300}>
        Clique Aqui
      </Button>
    </div>
  );
};

// - defaultProps
// Podemos também definir valores padrões para as propriedades através do defaultProps. Não é necessário o uso do prop-types para definirmos uma propriedade padrão. Isso faz parte do React.

Button.defaultProps = {
  width: 200,
  disabled: false,
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};
