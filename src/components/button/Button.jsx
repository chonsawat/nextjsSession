import React from "react";

const Button = ({ onClickHandler, text, name }) => {
  return (
    <button
      className="border border-white text-white rounded px-10 py-2 hover:bg-white hover:text-black hover:font-bold"
      name={name}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
