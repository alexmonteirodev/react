// - Radio

// radio.jsx
const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

//App.js
const App = () => {
  const [cor, setCor] = React.useState("");

  return (
    <form>
      <Radio
        options={["azul", "verde", "amarelo"]}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};
