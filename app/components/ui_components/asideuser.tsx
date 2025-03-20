"use client";
import React, { useEffect, useState } from "react";

interface props {
  username: string;
  description: string;
  button: string;
  isUser: boolean;
}

const asideuser: React.FC<props> = ({
  username,
  description,
  button,
  isUser,
}) => {
  const user = isUser;
  var size;

  const userChecker = () => {
    if (user) {
      size = "text-[14.5px]";
    } else {
      size = "text-[12.3px]";
    }
  };

  userChecker();

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-row items-center cursor-pointer">
        <div className="ml-0 bg-red-400 rounded-[500px] size-10.75"></div>
        <div className="ml-3 mr-auto flex flex-col justify-end items-start text-sm">
          <p className=" -mb-[2.5px]">{username}</p>
          <p className={`insta font-light text-zinc-400 ${size}`}>
            {description}
          </p>
        </div>
      </div>
      <p className="cursor-pointer ml-auto font-semibold text-[11px] text-blue-500 mr-5">
        {button}
      </p>
    </div>
  );
};

export default asideuser;
