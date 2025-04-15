// - Ferramenta Front End

// - Vite
// Cria um ambiente de desenvolvimento já configurado e otimizado para a criação de aplicativos com React.

//https://vite.dev/

//Na pasta que deseja instalar:
// npm create vite@latest .
// npm install

//ao usar o create, ele vai perguntar qual biblioteca, selecionamos react e depois a linguagem, no caso, javaScript. Daí ele já vai criar as pastas essenciais e o package.json com as dependencias, depois é só dar o npm install que vai puxar as dependencias e ele vai terminar de instalar tudo.
//------------------------------------------------------------------------------

// - Estrutura Mínima

// arquivos essenciais:
// - node_modules
// - public
// - src
//   - App.jsx
//   - main.jsx
// - index.html
// - package.json
// - package-lock.json
// - vite.config.js

// Código mínimo para o index.html:
// <!DOCTYPE html>
// <html lang="pt-BR">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>React</title>
//   </head>

//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>

// Código mínimo para o main.jsx:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//Código mínimo para o App.jsx:
// import React from 'react';
// const App = () => {
//   return <div>App React</div>;
// };
// export default App;

//agora é só limpar a pagina que já vem com os icones do vite e react e um count e começar a codar.
//deletar:
// link do favicon
// assets
// app.css
// index.css
// modaificar o main.jsx (deletar import de css; tirar modo estrito do react; no app.jsx apaga todos os imports e importa somente o react from react e deleta o codigo da function)
//------------------------------------------------------------------------------

// - EsLint config
//a config abaixo não é a mesma que vem no vite, é a que o rafael vai usar no curso:

// module.exports = {
//     env: {
//       browser: true,
//     },
//     extends: [
//       'eslint:recommended',
//       'plugin:react/recommended',
//       'plugin:react/jsx-runtime',
//       'plugin:react-hooks/recommended',
//     ],
//     parserOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       ecmaFeatures: {
//         jsx: true,
//       },
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     plugins: ['react-refresh'],
//     rules: {
//       'react-refresh/only-export-components': 'off',
//       'react/react-in-jsx-scope': 'off',
//       'react/prop-types': 'off',
//       'no-unsafe-finally': 'off',
//       'no-unused-vars': 'off',
//       'react/jsx-key': 'off',
//     },
//   };
