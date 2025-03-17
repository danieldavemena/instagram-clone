import React from "react";
import Image from "next/image";
import Yna from "@/public/images/Yna.png";

const posts = () => {
  return (
    <div className="w-[60%]">
      <div> Name </div>
      <div>
        <Image src={Yna} sizes="29" alt="yna" />
      </div>
    </div>
  );
};

export default posts;
