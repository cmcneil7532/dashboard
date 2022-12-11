import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";

const UserProfile = () => {
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p>User Profile</p>
        <Button icon={<MdOutlineCancel />} />
      </div>
    </div>
  );
};

export default UserProfile;
