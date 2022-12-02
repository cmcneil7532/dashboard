import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";

import { Cart, Chat, Notifications, UserProfile } from ".";

import { useStateContext } from "../contexts/ContextProvider";

//have instant return
// Reason why are customFunc doesnt have the same code as our menu button is because all button will have a unique onclick response. Just calling the action passed in
const NavButton = ({ title, customFunc, icon, dotColor, color }) => (
  <TooltipComponent content={title} positon="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        // the position of our dot Color icon and color
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const handleChange = "change";
const handleClick = "click";

const Navbar = () => {
  //Retrieve the active menu state
  //placing the paranthesis after teh useStateContext implies we are calling it as a hook.

  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveState) => !prevActiveState)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleChange("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <div className="flex">
          <NavButton
            title="Cart"
            customFunc={() => handleChange("chat")}
            //Creates the blue dot above the chat icon
            dotColor="#03C9D7"
            color="blue"
            icon={<BsChatLeft />}
          />
        </div>
        <div className="flex">
          <NavButton
            title="Notifications"
            customFunc={() => handleChange("notication")}
            dotColor="#03C9D7"
            color="blue"
            icon={<RiNotification3Line />}
          />
        </div>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center p-1 gap-2 cursor-pointer hover:bg-light-grey rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="w-8 h-8 rounded-full "></img>
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold text-14 ml-1  ">
                Christian
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400"></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
