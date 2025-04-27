// - Memo

// - React.memo
// basicamente o memo retorna um componente memorizado, isso significa que ele não vai renderizar esse componente novamente mesmo que o pai dele tenha o estado modificado.
// Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependam de estados diferentes.

// App.jsx

import React from 'react';
import Header from './Header';

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;

// Header.jsx
import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

export default React.memo(Header); //assim o header não renderiza

// obs: utilizar para elementos que não dependem de reatividade