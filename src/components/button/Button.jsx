import React from "react";

const Button = ({ onClickHandler, text, name }) => {
  return (
    <button
      className="bg-white rounded px-10 py-2 text-black"
      name={name}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
