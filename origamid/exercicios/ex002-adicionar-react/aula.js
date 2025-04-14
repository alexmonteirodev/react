// - Adicionar React sem npm

//o que é react? React é uma biblioteca JavaScript para criar interfaces de usuário, baseada em componentes reutilizáveis, que usa uma Virtual DOM para atualizações eficientes.

//o que é jsx? JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que permite escrever código que se parece com HTML dentro do JavaScript.

//Recomendado apenas para rápidos testes e prototipagem, você pode iniciar a desenvolver com React colocando no head do HTML os links abaixo (script).

//https://react.dev/learn/installation

//foram adicionados 3 scripts no html (antes do head):

// <!-- Carrega o React, React Dom e Babel -->
// <script src="https://unpkg.com/react@18/umd/react.development.js"></script> //aplicação mobile - react puro (jsx)
// <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> //aplicação web

// <!-- Don't use this in production: -->
// <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> // babel (compilador - transofrma js novo em antigo), aqui no caso ele serve para transformar arquivo jsx > js (jsx não consegue ser lido pelo browser)

//depois, criamos um script com a aula.js em que o type é text/babel (tem que ser exatamente assim)
