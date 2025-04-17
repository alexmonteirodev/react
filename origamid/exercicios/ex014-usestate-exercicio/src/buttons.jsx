import React from "react";

const Buttons = () => {
  function notebookClick() {
    const notebookUrl =
      "https://ranekapi.origamid.dev/json/api/produto/notebook";
    fetch(notebookUrl)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        <h1>{json.id}</h1>;
      });
  }
  return (
    <>
      <button onClick={notebookClick}>notebook</button>
      <button>smartphone</button>
      <button>tablet</button>
    </>
  );
};

export default Buttons;
