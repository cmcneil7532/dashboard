import React, { createContext, useContext, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";

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
  // Creaitng a state to determine our screen size our state will be undefined becuause we dont know intitally what our screen size is
  const [isScreenSize, setScreenSize] = useState(undefined);
  //Default color
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  //Our website will be default to light mode
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  //Our cart page will intiliaze as false or closed

  // we will have a setMode which will take an event and change the setting based on what is clicked
  const setMode = (e) => {
    //whatever value is passed from our themesettings component will be the new current mode
    setCurrentMode(e.target.value);
    //Update the storage wo when the user comes back the default will be whatever they had previously selected
    localStorage.setItem("themeMode", e.target.value);

    //closing the settings bar once themecolor is selected
    setThemeSettings(false);
  };
  const setColor = (mode) => {
    //whatever value is passed from our themesettings component will be the new current mode
    setCurrentColor(mode);
    //Update the storage wo when the user comes back the default will be whatever they had previously selected
    localStorage.setItem("colorMode", mode);

    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setClicked,
        handleClick,
        isScreenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        initialState,
      }}
    >
      {/**Placing children inside the StateContext.Provider anythign wrapped inside the component will inherit the states. In this case active menu */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
