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
