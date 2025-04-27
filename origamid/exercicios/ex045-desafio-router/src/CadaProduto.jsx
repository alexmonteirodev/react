import React from "react";

const CadaProduto = ({ produtos }) => {
  console.log(produtos);
  return (
    <>
      <div className="div-content">
        <img src="" alt="" />
        <div className="div-infos">
          <h2>Produto</h2>
          <h3>preco</h3>
          <p>
            descricao: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam ipsa corrupti ipsam aliquam! Eligendi obcaecati reiciendis
            minima eos porro dicta fugit facilis aliquam incidunt illo, eaque
            ipsum assumenda nulla rerum!
          </p>
        </div>
      </div>
    </>
  );
};

export default CadaProduto;
