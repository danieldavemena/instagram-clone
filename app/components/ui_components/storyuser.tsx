import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  profileImage: StaticImageData;
  username: string;
}

const storyuser: React.FC<props> = ({ profileImage, username }) => {
  return (
    <div className="flex flex-col items-center h-22 cursor-pointer">
      <div className="p-[2px] bg-gradient-to-tr flex flex-col items-center justify-center from-yellow-300 via-red-600 to-purple-500 rounded-[290px] size-16">
        <Image
          src={profileImage}
          alt="profile"
          className="border-2 size-15 border-[var(--background)] object-cover rounded-[290px]"
        />
      </div>
      <p className="text-[12px] mt-[4px] truncate w-[68px] text-center">
        {username}
      </p>
    </div>
  );
};

export default storyuser;
