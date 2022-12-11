import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
//change the state across all components in our app
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  //use our state to determine the current color

  const {
    setColor,
    currentMode,
    setCurrentMode,
    currentColor,
    setThemeSettings,
    setMode,
  } = useStateContext();
  return (
    //Make half the website transparent in the background
    <div className="bg-half-transparent w-screen fixed  nav-item top-0 right-0">
      {/**the creation of the theme sidebar */}
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgba(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            {<MdOutlineCancel />}
          </button>
        </div>
        {/**creating the thin gray border */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Options</p>
          {/**Creating our Radio button */}
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              //Check if it is dark
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color ml-4 p-4">
          <p className="text-xl font-semibold">Theme Colors</p>
          {/**Loop over our themecolors component with our tooltip component */}
          <div className=" flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer gap-5 flex items-center">
                  <button
                    type="button"
                    //Here we are displaying the individual colors we looped over
                    style={{ backgroundColor: item.color }}
                    className="rounded-full h-10 w-10 cursor-pointer"
                    onClick={() => {
                      setColor(item.color);
                    }}
                  >
                    {/**Check to see if the color is currently active or not not */}
                    <BsCheck
                      className={`ml-2 text-white text-2xl ${
                        //will see the check mark only on the current color
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
