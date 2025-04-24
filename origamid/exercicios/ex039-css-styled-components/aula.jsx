// - Styled Components (não utilizar, só pra saber que existe)

// - Styled Components
// Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único.

import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: tomato;
`;

const App = () => {
  return (
    <div>
      <Title>Título principal</Title>
    </div>
  );
};

// - Instalação

//intalar: npm install styled-components
// Plugin de VS Code: vscode-styled-components

//aula: https://www.origamid.com/slide/react-completo/#/0503-styled-components/1
