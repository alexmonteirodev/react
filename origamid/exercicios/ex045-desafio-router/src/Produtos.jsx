import React from "react";

const Produtos = ({ produtos }) => {
  if (!produtos || produtos.length === 0) {
    return (
      <div className="loading-content">
        <div className="loading">
          <div className="inside-loading"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="produtos-content">
        {produtos.map((produto) => (
          <div className="div-produtos-content" key={produto.id}>
            <a href="">
              <img
                className="imgs-produtos"
                src={produto.fotos[0].src}
                alt=""
              />
            </a>

            <h2>{produto.nome}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Produtos;
