// - Lazy e Suspense

// - Code Splitting
// Quando sua aplicação cresce e vc adiciona bibliotecas externas, vc começa a injetar um monte de código dentro de um arquivo único (na sua build), dependendo do tanto de código que tenha dentro, pode chegar o momento em que se torne pesado, tendo por ex: 4mb, pra isso existe o lazy e o suspense, com ele da pra dividir o aplicativo e só chamar uma parte quando ela for necessária e ele vai carregar ela lentamente e depois ir mostrando na tela.

//Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias.

//lazy faz o elemento ficar carregando
//suspense faz carregar

//obs: ao usar o suspense, deve-se usar um fallback (é a mesma coisa do loading da pagina. é como se o fallback dissese: qual vai ser o estado que vai aparecer enquanto está carregando esse contato? )

//exemplo: vamos supor que só quero usar uma biblioteca externa em um componente, que seja no Contato.jsx, dando o import no  Jquery , a app aumenta uns 80kb, então caso o user não entre na aba de Contato, o App carregou uma parte do código sem necessidade e só pesou na app.

import React from "react";
//import Contato from './Contato.jsx //isso se transforma na const Contato
const Contato = React.lazy(() => import("./Contato")); //lazy recebe um callback e ele deve retornar uma f própria (import) que retorna uma promessa

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(true)}>Ativar</button>
    </div>
  );
};

export default App;

//obs: no exemplo acima, indo no inspecionar da pg e na aba network da pra ver os itens carregados e ao clicar em ativar ele carrega a pasta chunk do jquery com os 80kb

//atnção: Não é pra ficar usando isso na aplicação inteira, só quando for utilizar em algo específico que seja mto grande e não tem necessidade de ser carregado sempre. ex: uma biblioteca de videos.
