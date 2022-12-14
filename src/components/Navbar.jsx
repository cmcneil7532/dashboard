import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line, RiWindowLine } from "react-icons/ri";
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
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  //Retrieve the active menu state
  //placing the paranthesis after teh useStateContext implies we are calling it as a hook.

  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setClicked,
    handleClick,
    isScreenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  // we want to figure out the initial screen size whenever our application in loaded
  useEffect(() => {
    //settin the setScreenSize to the measurements of the window usigng window.innerWidth
    const handleResize = () => setScreenSize(window.innerWidth);

    //addinf and event listenter to our window when the resize happens we want to set the setScreen size with our handleresize function
    window.addEventListener("resize", handleResize);
    //Call it to find intial width
    handleResize();

    //Very important when using the event listener you also want to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // this useEffect will determine whether the side bar to rendor intially depending the width of the screensize is les than 900px it should not rendor
  useEffect(() => {
    if (isScreenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [isScreenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveState) => !prevActiveState)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          //Creates the blue dot above the chat icon
          dotColor="#03C9D7"
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notifications")}
          //Creates the blue dot above the chat icon
          dotColor="#03C9D7"
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center p-1 gap-2 cursor-pointer hover:bg-light-grey rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              className="w-8 h-8 rounded-full alt-user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold text-14 ml-1  ">
                Christian
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400"></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
        {/**Based on whether or not our isClick state has been clicked will rendor our page we clicked */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notifications && <Notifications />}
      </div>
    </div>
  );
};

export default Navbar;
