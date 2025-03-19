import React from "react";
import Image from "next/image";
import Sidebutton from "../ui_components/sidebutton";
import LogoWhite from "@/public/vectors/instagram-logo-white.svg";
import Home from "@/public/ui_vectors/home.svg";

const sidebar = () => {
  return (
    <nav className="fixed w-61.5 left-0 insta h-screen p-4 pt-[2.5em] list-none [&>li]:px-[10px] [&>li]:py-[10px] [&>li]:mb-[6px] [&>li]:text-[1.07em] [&>li]:pr-[7em] [&>li]:hover:bg-zinc-900 [&>li]:rounded-lg bg-black border-r-1 border-r-zinc-800 [&>li]:transform [&>li]:-translate-y-9">
      <Image
        src={LogoWhite}
        className="w-25.5 ml-2 transform -translate-y-9"
        alt="Instagram"
      />
      <Sidebutton icon={Home} label="Home" selected={true} />
      <Sidebutton icon={Home} label="Search" selected={false} />
      <Sidebutton icon={Home} label="Button" selected={false} />
      <Sidebutton icon={Home} label="Button" selected={false} />
      <Sidebutton icon={Home} label="Button" selected={false} />
      <Sidebutton icon={Home} label="Button" selected={false} />
    </nav>
  );
};

export default sidebar;
