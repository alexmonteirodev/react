// - Ferramentas de Automação
// como estávamos usando o react nas aulas passadas (importando o script) não são utilizadas, pois se esses links externos ficarem fora do ar, a aplicação cai. O que deve ser feito é instalar o react direto no appplicativo e baixar todo o react além de fazer a transpilação (transformação do JSX em JS) diretamente na nossa maquina para servir isso para o cliente e não fazer a transformação apenas quando ele entra no site.
//------------------------------------------------------------------------------

//pra isso, devemos usar:

// Linha de Comando
// https://www.origamid.com/curso/javascript-completo-es6/1001-linha-de-comando

// NPM
// https://www.origamid.com/curso/javascript-completo-es6/1002-npm
//------------------------------------------------------------------------------

// 1ª ferramenta de automação que precisamos é um Bundler:

// - Bundler
// Agrupa (bundle) o código do seu aplicativo (build do aplicativo)

// Permite definirmos os componentes em diferentes arquivos para melhor organização. (modules) (ou seja, com ele podemos separar nossa aplicação em pequenos arquivos e depois todas elas serão agrupadas em um arquivo final, otimizando o aplicativo.)

// Facilita a importação de código externo instalado via NPM

// exemplos: ESBuild, Rollup, Parcel, Turbopack, Webpack
//------------------------------------------------------------------------------

// 2ª ferramenta de automação é o transpiler:

// - Transpiler
//no react nós usamos a sintexa de JSX que não é JS puro, logo, o JSX tem que ser transformado em JS no final e essa é a função do transpilador. ex: Transforma JSX return <div></div> em funções de React React.createElement()

// Transforma JavaScript novo const em JavaScript antigo var (transforma em um js antigo por exemplo)

// Exemplos: Babel, SWC, ESBuild
//------------------------------------------------------------------------------

// - ESBuild Mínimo
//vamos iniciar as instalações de forma minima possivel porque depois vamos usar outra ferramenta que cria tudo isso de uma vez.

//Iniciar um pacote npm na pasta do seu aplicativo.
//npm init -y (inicia pacote e da sim pra tudo que perguntar)

//depois criar o html que tenha a estrutura do root (raiz do react) e o script onde vai ficar o codigo js:
{
  /* <div id="root"></div>
<script src="./main.js"></script> */
}

//instalar o EsBuild
//npm install esbuild

//substitui os scripts do package.json
// "scripts": {
//     "start": "esbuild --bundle src/main.jsx --outfile=main.js --servedir=./ --watch",
//     "build": "esbuild --bundle src/main.jsx --outfile=main.js"
//   },

//instalar o react (precisa de dois elementos: react e o react DOM)
//npm install react react-dom

//cria a raiz do react no main.jsx
//nas aulas anteriores simulávamos com o:
//ReactDOM.createRoot(document.getElementById('app-react')).render(<Comprar />);
//precisamos importar essa  função para montar a raiz da aplicação em react. Pra isso basta importar o reactDom no main.jsx:
// import ReactDOM from "react-dom/client";
// import React from "react";

// e depois monta a raiz na main.jsx:
// ReactDOM.createRoot(document.getElementById('app-react')).render(<Comprar />)

//depois cria uma arquivo.jsx dentro do src, importa o react e exporta pra main.jsx

//isso tudo é uma demonstração do que acontece e por isso fizemos à mão, porém vamos utilizar uma ferramenta que já cria tudo de uma vez, porque se for fazer tudo na mão pode esquecer de alguma funcionalidade e é mais trabalhoso, por exemplo, se nao add o script de reload, toda vez que alterar algo no codigo tem que ir na pagina e dar refresh, e com essa ferramenta já importamos tudo e economizamos tempo. Reload foi só um exemplo mas existem muitas outras funcionaliades que são criadas automaticamente, como pasta de imagens, comilação de eslint...

//ver aula006, usamos essa ferramenta chma-se VITE
