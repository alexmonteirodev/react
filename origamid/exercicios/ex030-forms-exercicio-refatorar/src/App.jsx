import React from "react";

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  return (
    <div>
      <form action="">
        {coresArray.map((cor) => (
          <label key={cor} style={{ textTransform: "capitalize" }}>
            <input
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        ))}
      </form>
    </div>
  );
};
// obs: textTransform: "capitalize serve para por a priemira lentra em maiusculo
export default App;
