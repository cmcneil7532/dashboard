import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="w-96 bg-white nav-item absolute right-5 md:right-52  p-8 top-16 dark:bg-[#42464D] rounded-lg">
      <div className="flex justify-between items-center dark:text-white">
        <p>Messages</p>
        <Button icon={<MdOutlineCancel />} />
      </div>
      {chatData.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-20 h-20">
            <img src={item.image} className="p-2 rounded-full" />
          </div>
          <div className="text-sm text-gray-400">
            <p className="font-bold mb-2 text-lg dark:text-white">
              {item.message}
            </p>
            <p className="dark:text-gray-400">{item.desc}</p>
            <p className="dark:text-gray-400">{item.time}</p>
          </div>
        </div>
      ))}
      <div>
        <button
          className="w-full h-10 rounded-lg"
          style={{ backgroundColor: currentColor, color: "white" }}
        >
          See all messages
        </button>
      </div>
    </div>
  );
};

export default Chat;
