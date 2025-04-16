// - Componentes
// O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com componentes funcionais.
// no caso abaixo são exemplos de componentes o header e o footer
//lembrar que ao criar a pasta do componente, tem que importar o react, fazer a função, po exemplo: header e exportar e depois importar na pasta do app.
// basicamente os componentes são como os modules, vc cria a funcionaliade em uma pasta e depois agrupa em um só lugar para se organizar melhor e ficar mais fácil de dar manutenção.

//logo, na pasta header temos:
import React from "react";

const Header = () => {
  return (
    <header>
      <a href="./">Marca</a>
      <nav>
        <a href="./">Link 1</a>
        <a href="./">Link 2</a>
      </nav>
    </header>
  );
};
// export default Header;

//na pasta da app:
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header /> //componente
      <p>Esse é o meu aplicativo</p>
      <Footer /> //componente
    </div>
  );
};
export default App;

//por conta da extensão 'es7 react' do vscode, escrevendo um 'sipet' que é: rafce, isso já cria a estrutura toda, é como se fosse o ! do html.
// rafec:
import React from "react";

const aula = () => {
  return <div></div>;
};
// export default aula
//-----------------------------------------------------------

// - Interface
// Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.
//obs: pode reaproveitar os componentes quantas vezes quiser. Note que o input foi reaproveitado

//Button.js
import React from "react";

const Button = () => {
  return <button>Enviar</button>;
};
// export default Button;
//----------

//Input.js
import React from "react";

const Input = () => {
  return <input type="text" />;
};
// export default Input;
//----------

//form.js
import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};
// export default Form;
//-----------------------------------------------------------

// - Return
// Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).
// Atenção, react só retorna, string, number, elementos jsx (html) e null, portanto, no exemplo abaixo, a const active da true e isso faz com que retorne um elemento hmtl, mas se fosse apenas false, daria erro porque seria um valor boleano 'false' e isso o react não retorna, logo, sempre devemos colocar o null em esse tipo de condição pq caso de false, retorne null e não de erro e não quebre o app.

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Ativo</p>;
  } else {
    return null;
  }
};
//-----------------------------------------------------------

// - React.Fragment
// Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>
//vale lembrar que não é o ideal criar dentro de div porque a cada componenete que voce criar, seria uma div a mais no seu dom e isso suja o dom e não é bom pra performance.

const App2 = () => {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

// é a mesma coisa que:

const App3 = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};
