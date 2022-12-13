import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import { chatData } from "../data/dummy";
const Chat = () => {
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
            <p>{item.desc}</p>
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
