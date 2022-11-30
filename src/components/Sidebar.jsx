import React from "react";
//Allows us to jump between pages in our app
import { Link, NavLink } from "react-router-dom";
// import icons
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
//Importing our data with users info and pics
import { links } from "../data/dummy";

const Sidebar = () => {
  const activeMenu = true; // dummy variable

  // Variable active link and normal link will have tailwind css code
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark: text-gray-200 dark:hover: text-black hover:bg-light-gray";

  return (
    //On full screen side bar will have margin left 3px and take the full screen. Medium devices scroll bar will be hidden and only show if necessary with overflow auto. Padding bottom 2.5rem
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/**Usign a condtional to determine whether activemenu is true*/}
      {activeMenu && (
        // create a div which will hace a link
        <>
          {/**Creating a div with a link inside with some utility classes */}
          <div className="flex justify-between items-center">
            {/** Styling the link click will reference homepage, display flex gap and margin-left 0.75rem, tracking-tight so letters are closer together and on dark mode the text and slate will change */}
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 flex mt-4 text-xl font-extrabold tracking-tight dark: text-white text-slate-900"
            >
              {/**SiShopware is a logo imported form react-icons */}
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            {/** Tooltip component which will close side bar */}
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                // Class Utlilty large text, border radius full, hover a light gray background-color, margin top 1 rem, display block, and on medium devices the button will be hidden
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {/**Loop over our links  which we imported  we are going to map over links and create a div which will only cary the title name*/}
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>

                {/**Loop over our the links to grab the link name. */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    onClick={() => {}}
                    key={link.name}
                    // Our class name will be dynamic with class utilites injected depending on if the link is active
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
