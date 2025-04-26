// - Imagens
// Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.

import foto from "./img/foto.jpg";

const App = () => {
  return (
    <div>
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

//  - Background
// No CSS podemos utilizar o caminho direto. É importante colocar o ./, pois o webpack vai utilizar isso e substituir para o caminho final do site.

.fundo {
  width: 50px;
  height: 50px;
  background-image: url('./img/foto.jpg');
  background-size: cover; //centraliza a imagem no tamanho que estiver
}

// - SVG
// Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre ele.

// No Vite é necessário um plugin para ativar essa funcionalidade. No create-react-app essa funcionalidade vem instalada por padrão. Na versão nova do vite também é necessário utilizar os SVG's de uma forma mais simples.
//plugin para funcionar com o vite: https://www.npmjs.com/package/vite-plugin-svgr

//antes, para injetar no html o svg, tinha que no App.jsx, importar o svg como: import {ReactComponent} from './img/dog.svg', porém se fosse importar outro svg já não daria porque só pode ter uma variavel com o nome 'ReactComponente', logo, tinhamos que fazer o import usando: {ReactComponent as Dog}, assim se altera o nome da variável e usa como dog, aí da pra importar quantos quiser, porém com a nova versão do plugin, já não precisa disso, basta importar o SVG (sem usar o as ReactComponent) e adicionar ?react no final do caminho: import Dog from './img/dog.svg?react':

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr'; //importa o plugin

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
    }),
    svgr(), //ativa o plugin
  ],
});

//App.jsx
import Dog from './img/dog.svg?react';

const App2 = () => {
  return (
    <div>
      <Dog />
    </div>
  );
};

// - Componentes SVG
// porém da pra usar o svg como um como um componente pra poder ter mais controle sobre ele. Assim, da pra passar, por exemplo, a cor dele como uma propriedade, e alterar dpois pra cor que quiser: (não só a cor, mas o tamanho do svg, tamanho dos olhos etc... )
// e não para por aí, já que agora o svg é um componente react da pra usar p useState nele, ou seja, criar animações via state e css, por exemplo, criar um event de click em algum lugar e quando clicar a cor do icone muda por exemplo.

// DogScv.jsx
const DogSvg = ({ color }) => {
    return (
      <svg
        width="28" //tamanho largura
        height="22" //tamanho altura
        viewBox="0 0 28 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z"
          fill={color} //cor do svg
        />
        <circle cx="21" cy="3" r="3" fill={color} /> //define as propriedades de cada olho
        <circle cx="7" cy="3" r="3" fill={color} /> //define as propriedades de cada olho
      </svg>
    );
  };

  //App.jsx
  import DogSvg from './DogSvg'

  const App3 = () => {
    return (
      <div>
        <DogSvg color='#84e' />
      </div>
    );
  };