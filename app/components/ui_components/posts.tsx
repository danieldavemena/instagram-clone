import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  user: string;
  location: string;
  image: StaticImageData;
  profileImage: StaticImageData;
}

const posts: React.FC<props> = ({ user, location, image, profileImage }) => {
  return (
    <div className="w-[471px] flex flex-col gap-[4.5px] items-start mb-5">
      <div className="flex flex-row gap-2 items-center transform translate-y-[1px] cursor-default  ml-0 mr-auto">
        <Image
          src={profileImage}
          alt="profile"
          className="ml-[3px] mb-1  rounded-3xl border-3 p-[1.5px] border-red-400 size-10"
        />
        <div className="text-[14.5px] mt-1">
          <h1 className="font-bold ">{user}</h1>
          <p className="text-[11.5px] transform -translate-y-1">{location}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          src={image}
          alt="image"
          className="transform translate-x-[2px] p-[1px]  rounded-md border-1 border-zinc-800"
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
