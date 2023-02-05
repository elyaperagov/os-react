import React from "react";

const RoundButton = ({ name, setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen(true)} className="Button Button--primary">
      {name}
    </button>
  );
};

export default RoundButton;
