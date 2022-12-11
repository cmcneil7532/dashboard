import React from "react";
import { IoIosConstruct } from "react-icons/io";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ color, bgColor, borderRadius, size, text, icon }) => {
  const { setClicked, inititalState } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setClicked(inititalState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
