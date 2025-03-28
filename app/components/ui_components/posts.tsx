import React from "react";
import Image, { StaticImageData } from "next/image";
import Comments from "@/public/ui_vectors/comments.svg";
import Likes from "@/public/ui_vectors/likes.svg";
import Share from "@/public/ui_vectors/share.svg";
import Save from "@/public/ui_vectors/save.svg";

interface props {
  user: string;
  location: string;
  image: StaticImageData;
  profileImage: StaticImageData;
}

const posts: React.FC<props> = ({ user, location, image, profileImage }) => {
  return (
    <div className="w-[471px] flex flex-col gap-[4.5px] items-start mb-5">
      <div className="flex flex-row gap-2 w-full items-center transform translate-y-[1px] cursor-default  ml-0 mr-auto">
        <div className="ml-[3px] mb-1  rounded-3xl p-[2px] bg-gradient-to-tr from-yellow-300 via-red-600 to-purple-500 size-10">
          <Image
            src={profileImage}
            alt="profile"
            className="border-2 object-cover size-9 border-[var(--background)] rounded-3xl"
          />
        </div>
        <div className=" mt-1 ">
          <h1 className="font-bold flex flex-row items-center text-[13px] transform -translate-y-[2px]">
            {user}
            <span className="ml-[7px] text-zinc-400 font-light flex flex-row items-center">
              <p className="text-[8px] transform -translate-y-[0.5px]">●</p>
              <p className="ml-[5px] tracking-[1px]">7h</p>
            </span>
          </h1>
          <p className="text-[11.5px] transform -translate-y-1 ">{location}</p>
        </div>
        <div className="text-[6.5px] tracking-[2px] transform -translate-y-[3px] translate-x-[1px] mr-0 ml-auto">
          ●●●
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Image
          src={image}
          alt="image"
          className="transform translate-x-[2px] p-[1px]  rounded-md border-1 border-zinc-800"
        />
        <div className="ml-1 text-md flex flex-row items-center w-full gap-[20px]">
          <a href="">
            <Image src={Likes} alt="" className="size-[23px] object-contain" />
          </a>
          <a href="">
            <Image
              src={Comments}
              alt=""
              className="size-[23px] object-contain"
            />
          </a>
          <a href="">
            <Image src={Share} alt="" className="size-[23px] object-contain" />
          </a>
          <a href="" className="mr-[6px] ml-auto">
            <Image src={Save} alt="" className="size-[23px] object-contain " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default posts;
