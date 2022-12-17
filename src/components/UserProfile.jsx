import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import { userProfileData } from "../data/dummy";
import christian from "../data/christian.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import linkedin from "../data/linkedin.svg";
import github from "../data/github.svg";
const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 dark:text-white">
      <div className="flex justify-between items-center">
        <p>User Profile</p>
        <Button icon={<MdOutlineCancel />} />
      </div>
      <div className="mt-4 flex ">
        <div>
          <img
            src={christian}
            className="rounded-full w-20 h-30 hover:drop-shadow-md"
            alt="user-profile"
          />
        </div>
        <div className="ml-3">
          <p className="font-bold text-lg">Christian McNeil</p>
          <p>Front-End Developer</p>
          <div className="flex">
            <span className="mr-4">
              <a href="https://www.linkedin.com/in/christian-mcneil-733100237/">
                <img src={linkedin} className="w-5 h-10" />
              </a>
            </span>
            <span>
              <a href="https://github.com/cmcneil7532">
                <img src={github} className="w-5 h-10" />
              </a>
            </span>
          </div>
          <p>chris.mcneil7532@gmail.com</p>
        </div>
      </div>
      {/**Map over my profile to prevent typing everything over agin */}
      {userProfileData.map((item, index) => (
        <div
          key={index}
          className=" flex gap-3 border-t-1 border-color p-3 hover:bg-light-gray hover:cursor-pointer dark:hover:bg-gray-400 rounded-lg"
        >
          {/**Created a button with dyanmic in-style */}
          <button
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className="rounded-lg text-xl p-3 mt-4 "
          >
            {item.icon}
          </button>
          <div className="mt-3 ">
            <p className="font-bold">{item.title}</p>
            <p className="text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
      <button
        className="w-full h-10 rounded-lg"
        style={{ backgroundColor: currentColor, color: "white" }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
