import React from "react";

const StyleButtons = (props) => {
  return (
    <div>
      <button
        style={{
          background: "blue",
          color: "black",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        {props.btn}
      </button>
    </div>
  );
};

export default StyleButtons;
