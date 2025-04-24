// - CSS Modules

// - CSS
//Os modules garantem que as classes utilizadas sejam sempre únicas, evitando o conflito. O modo já vem configurando com o Vite, basta definirmos o nome do arquivo css com a palavra .module. Ex: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

// a vantagem de criar um module é que não precisaria se preocupar de criar um estilo css com nome unico, como na aula 037, onde teriamos o classname como App (mesmo nome do componente) ex: .App h1. Agora usando o modules não precisaria disso

//agora, basicamente, é como se o webpack criasse um objeto com os estilos e vc acessa eles pelo classname usando o acesso a um objeto normal, ex: styles.preco

//exemplo: criar na pasta componentes o Produto.jsx e o css dele, Produto.module.css:

//Produto.jsx
import styles from './Produto.module.css';

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

//Produto.module.css
.titulo,
.preco {
  color: #43c;
}

.preco {
  font-weight: bold;
}

.comprar {
  transform: rotate(90deg) translateY(-100px);
}

// - camelCase
//Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.

.tituloPrincipal {
  color: blue;
}

// - Funcionalidades Extras (não utilizar, só para saber que existe)
// O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.

.titulo {
  color: #43c;
}

/* no local de composes use a vírgula .titulo, .preco {} */
.preco {
  composes: titulo;
  font-weight: bold;
}

/* no local de variáveis utilize variáveis de CSS com o var() */
@value width: 900px;

/* crie um css global utilizando o IMPORT puro para quando precisar de estilos globais */
:global .container {
  max-width: width;
}