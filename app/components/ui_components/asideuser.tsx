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
  var size = "text-[15px]";

  useEffect(() => {
    const userChecker = () => {
      if (isUser) {
        size = "text-[15px]";
      } else {
        size = "text-[10px]";
      }
    };

    userChecker;
  }, []);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="ml-0 bg-red-400 rounded-[500px] size-10.75"></div>
      <div className="ml-3 mr-auto flex flex-col justify-end items-start text-sm">
        <p className=" -mb-[2.5px]">{username}</p>
        <p className={`insta-light font-bold text-zinc-400 ${size}`}>
          {description}
        </p>
      </div>
      <p className="ml-auto text-xs text-blue-500 mr-5">{button}</p>
    </div>
  );
};

export default asideuser;
