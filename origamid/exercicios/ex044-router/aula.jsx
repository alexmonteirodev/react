// - Router

// - React Router Dom (mais famoso)
// É uma extensão que serve para gerenciar as rotas do React.
// Rota é a url de onde a pagina está no momento

// https://reactrouter.com/

// instalar: npm i react-router-dom@6

// - BrowserRouter, Routes e Route
// · BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router.
// · Routes define a área em que vamos colocar os nossos Route.
// · Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Sobre from "./Sobre";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> //é dizer no caminho/path '/'
        renderize o emento 'home'
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};
//obs: olhar no exempo criado no app do react.


// - 404 - Não Encontrado
// O * renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Pagina404 from "./Pagina404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};
//------------------------------------------------------------

// - Link
// O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="sobre">Sobre</Link>
      <Link to="contato">Contato</Link>
    </nav>
  );
};


// - NavLink
// O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "tomato",
  };
  return (
    <nav>
      <NavLink to="/" end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="contato" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </nav>
  );
};

// como o navlink add uma class active para a pagina que está ativa no momento da pra add um css pra isso, usando o css normal ou adicionando inline
.active{
    color: red
}
//ou
<NavLink to="/" end activeStyle={{color:'red'}}>
Home
</NavLink>
// assim não precisaria importar o css. também da pra importar como o exemplo acima: activeStyle={activeStyle}
//------------------------------------------------------------


// - useNavigate
// O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Faz o login');
    navigate('/sobre');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};


// - useParams
// Rota Dinâmica
// O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './Produto';
import Home from './Home';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

// useParams
// O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.

import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  //agora basta fazer o fetch do produto que quer puxar

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  );
};


// - useLocation
// Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); //retorna infos da rota como pathname, search, state, key e outros

  React.useEffect(() => {
    const search = new URLSearchParams(location.search); //f para buscar algo pelo site/banco de dados
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]); //ocorre sempre que o location for alterado

  return <div></div>;
};
//------------------------------------------------------------


// - Nested Routes
// Utilizamos nested routes quando precisamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.
//obs: exemplo no app react usando produto - customizado; avaliação; descrição
// tem duas maneiras de fazer isso, pode ser na pasta produto e definir as rotas aninhadas ou direto no App. (as duas são corretas, é só uma questão de preferência)

// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

// Produto.jsx
//aninhanda na pasta produto
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};
// ou

//aninhada direto no App (tem que usar o outlet)
const App = () => {
    return (
      <BrowserRouter>
        <Header />
        {/* //header geralmente não muda então pode ficar fora das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id/*" element={<Produto />}>
            <Route path="" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
          <Route path="*" element={<NaoEcontrada />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;


// -  Outlet
// Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota.
import { Outlet } from "react-router-dom";
const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />}> {/* repare que assim não precisa do /* */}
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};