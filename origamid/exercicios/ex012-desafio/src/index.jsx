import React from "react";
const { pathname } = window.location;
console.log(pathname);

const Index = () => {
  return (
    <>
      <ul>
        <li>
          <a href={<Home />}>Home</a>
        </li>
        <li>
          <a href="">Produtos</a>
        </li>
      </ul>
    </>
  );
};

export default Index;
