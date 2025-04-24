// - CSS Frameworks

// - CSS
// Podemos adicionar qualquer library/framework de css ao React. Vamos instalar a versão 5 do bootstrap. Popper é necessário para algumas funções do bootstrap.

//para instalar: npm install bootstrap@next
//https://getbootstrap.com/

// basicamente, tem duas formas de usar o bootstrap, via install e via CDN

// 1 - install:
// vai instalar via npm: npm install bootstrap@5.3.5 direto na sua maquina/projeto.
//pontos positivos:
// •	Você baixa os arquivos pra sua máquina, dentro da pasta node_modules.
// •	Pode usar offline depois que estiver instalado.
// •	Ideal pra projetos mais robustos, onde você controla o build (Webpack, Vite, etc.).

// e depois fazer o import:
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 2 - via CDN:
//obs: CDN = Content Delivery Network (Rede de Distribuição de Conteúdo)
// CDN é basicamente uma rede de servidores espalhados pelo mundo que entregam arquivos (como imagens, vídeos, CSS, JS etc) de forma rápida e eficiente, de um servidor mais próximo de você.

//na documentação do site diz para incluir via cdn a versão de css e uma de js separadamente com os links (colocando no html):
//(o arquivo .css, precisa importar pra ter os estilos visuais e o .js só importa se for usar coisas que dependem de JavaScript)

// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>

// repare que no meio dos links tem '/dist/css/bootstrap.min.css' e o '/dist/js/bootstrap.bundle.min.js' que é exatamente o que impostamos no npm

//obs: da pra usar style em cima do style do bootstrap
//--------------------------------------------------------------------

// Logo, temos que uma das formas de usar os frameworks é através de classes (App1.jsx), porém tbm temos os frameworks que vem direto como uma biblioteca de componentes e da pra usar os componentes diretamente (App2.jsx), como é o caso do: https://react-bootstrap.netlify.app/

//assim, ao invés de usar classes, temos que importar cada componente que vamos utilizar.
