import React from "react";

const PhotoGet = () => {
  const [id, setId] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((r) => r.json())
      .then((json) => console.log(json));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => {
          setId(target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
