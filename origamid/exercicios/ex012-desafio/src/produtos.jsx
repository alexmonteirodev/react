import React from "react";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];
console.log(produtos);

const Produtos = () => {
  return (
    <>
      <h1 style={{ color: "green" }}>Produtos</h1>

      {produtos.map((produto) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "2rem",
              padding: "1rem",
            }}
            key={produto.nome}
          >
            <h2>{produto.nome}</h2>
            {produto.propriedades.map((params) => (
              <ul key={params}>
                <li>{params}</li>
              </ul>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Produtos;
