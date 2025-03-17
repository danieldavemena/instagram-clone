import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  user: string;
  location: string;
  image: StaticImageData;
}

const posts: React.FC<props> = ({ user, location, image }) => {
  return (
    <div className="w-[480px] flex flex-col items-center mb-5">
      <div className="flex flex-row gap-2 items-center cursor-default  ml-0 mr-auto">
        <div className="ml-2.25 mb-1 bg-red-400 rounded-3xl size-10"></div>
        <div className="text-[15px] mt-1">
          <h1 className="font-bold ">{user}</h1>
          <p className="text-[12.5px] transform -translate-y-1">{location}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          src={image}
          alt="image"
          className="p-[1px] rounded-sm border-1 border-zinc-800"
        />
        <div className="ml-1 text-md flex flex-row align-center gap-6">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
      </div>
    </div>
  );
};

export default posts;
