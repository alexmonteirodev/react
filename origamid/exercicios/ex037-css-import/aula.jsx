// - CSS Import

// - Import
// A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript.

//App.js
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
    </div>
  );
};

//App.css
.container {
    max-width: 30rem;
    margin: 0 auto;
  }
  
  .text {
    font-weight: bold;
  }
  
// - Componentes
//Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

//App.js
import './App.css';
import Title from './Components/Title';

const App = () => {
  return (
    <div className="container">
      {/* <Title text="Meu título" /> */}
      <p className="text">Meu site</p>
    </div>
  );
};

//Title.js
import './Title.css';

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};

//Title.css
.Title {
  font-size: 2rem;
  font-family: Cambria, serif;
}

// - Conflito
//Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.


// - Evite Conflitos
//Defina nomes únicos para os componentes e coloque classes com os mesmos nomes, assim sempre terá um nome único e é até mais organizado.
//exemplo:
import './UserForm.css';

const UserForm = () => {
  return (
    <div className="UserForm">
      <h1>Formulário</h1>
      <p className="UserFormText">Esse texto.</p>
    </div>
  );
};

//UserForm.css
.UserForm h1 {
  color: tomato;
}

.UserFormText {
  font-family: serif;
}