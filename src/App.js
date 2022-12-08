import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

//Import individual components from components and pages folders
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerece,
  Orders,
  Employee,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  ColorPicker,
  Bar,
  Pie,
  Line,
  ColorMapping,
  Financial,
  Editor,
  Calendar,
} from "./pages";

import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  {
    /**Based on the boolean if true sidebar opens: false navbar is shown */
  }
  const { activeMenu } = useStateContext();

  return (
    <div>
      {/**Importing browser router package into App component*/}
      <BrowserRouter>
        {/**Creating a div thats relative usig tailwind css to change the background on dark mode */}
        <div className="flex relative dark:bg-main-dark-bg">
          {/**Creating a div thats fixed with bottom and top 4px */}
          {/**Creating the layout to the right 1rem and bottom 1rem and the AKA the bottom right of the page. And an index will ensure it doesnt get sent behind any other layers  */}
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            {/**Inject my tooltip packgage with props setting and positon top */}
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

          {/**Based on the condtion if active menu is true the side will appear with a width of 18rem else no sidebar and width of 0 */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark: bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={` dark: bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            {/**Implenting the Route package. Is a container for a nested tree of elements that renders the branch that best matches the current location. */}

            <div>
              <ThemeSettings />
              <Routes>
                {/**Dashboard render the Ecommerece page first and a secondary link */}
                <Route path="/" element={<Ecommerece />} />
                <Route path="/ecommerce" element={<Ecommerece />} />

                {/**Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/customers" element={<Customers />} />

                <Route path="/calendar" element={<Calendar />} />

                {/**Apps */}

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/**Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
