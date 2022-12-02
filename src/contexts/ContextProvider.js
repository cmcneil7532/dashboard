import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const ContextProvider = ({ children }) => {
  //active menu state set to true
  const [activeMenu, setActiveMenu] = useState(true);

  // our click will be set false for all nav buttons
  const [isClicked, setClicked] = useState(initialState);
  // just returning clicked will return the whole object so destructing the object to only change a specific property is will be our soution
  const handleClick = (clicked) => {
    setClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setClicked, handleClick }}
    >
      {/**Placing children inside the StateContext.Provider anythign wrapped inside the component will inherit the states. In this case active menu */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
