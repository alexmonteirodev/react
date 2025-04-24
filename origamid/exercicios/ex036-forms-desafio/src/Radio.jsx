import React from "react";

const Radio = ({ pergunta, options, onChange, value, active, id }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            onChange={onChange}
            value={option}
            id={id}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};
export default Radio;
