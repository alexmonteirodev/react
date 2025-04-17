import React from "react";
const tabletUrl = "https://ranekapi.origamid.dev/json/api/produto/tablet";
const smartphoneUrl =
  "https://ranekapi.origamid.dev/json/api/produto/smartphone";

const Fetch = () => {
  const [notebook, setNotebook] = React.useState(null);

  const notebookUrl = "https://ranekapi.origamid.dev/json/api/produto/notebook";
  fetch(notebookUrl)
    .then((r) => r.json())
    .then((json) => {
      console.log(json);
    });
  return (
    <>
      <div></div>
    </>
  );
};

export default Fetch;
