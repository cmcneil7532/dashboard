import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = true;

  return (
    <div>
      {/**Importing browser router package into App component*/}
      <BrowserRouter>
        {/**Creating a div thats relative usig tailwind css to change the background on dark mode */}
        <div className="flex relative dark:bg-main-dark-bg">
          {/**Creating a div thats fixed with bottom and top 4px */}
          {/**Creating the layout to the right 1rem and bottom 1rem and the AKA the bottom right of the page. And an index will ensure it doesnt get sent behind any other layers  */}
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            {/**Inject my tooltip packgage with props setting and potion top */}
            <TooltipComponent content="Settings" position="Top">
              {/** Create a button using the icons package */}
              {/**Using tailwind to make the icon larger, padding 3px, hover over light gray background color and a shadow behind, and text white */}
              {/**Creating an inline style with background color blue and radius 50% */}
              <button
                type="button"
                className="text-3xl p-3 hover:bg-light-gray hover: drop-shadow-xl text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
            {/**Creating a side bar with a conditional whether the side bar is opened or not */}
          </div>
          {activeMenu ? <div>SideBar</div> : <div>Sidebar w-0</div>}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
