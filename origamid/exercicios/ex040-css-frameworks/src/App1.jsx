//utilizando classes para estilização

import React from "react";

const App1 = () => {
  return (
    //obs: da pra usar style em cima do style do bootstrap, ex:
    <div className="card bg-dark text-white m-5" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  );
};

export default App1;
