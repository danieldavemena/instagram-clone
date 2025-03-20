import React from "react";
import Image from "next/image";
import Sidebutton from "../ui_components/sidebutton";
import LogoWhite from "@/public/vectors/instagram-logo-white.svg";
import Home from "@/public/ui_vectors/home.svg";
import Search from "@/public/ui_vectors/search.svg";
import Explore from "@/public/ui_vectors/explore.svg";
import Reels from "@/public/ui_vectors/reels.svg";
import Messages from "@/public/ui_vectors/messages.svg";
import Notifications from "@/public/ui_vectors/notifications.svg";
import Create from "@/public/ui_vectors/create.svg";
import Dashboard from "@/public/ui_vectors/dashboard.svg";

const sidebar = () => {
  return (
    <nav className="fixed w-[244.5px] left-0 insta h-screen p-3 pt-[2.5em] list-none    bg-black border-r-1 border-r-zinc-800 ">
      <Image
        src={LogoWhite}
        className="w-25.5 h-10 mt-[30px] mb-[32px] object-cover translate-x-[12px] transform -translate-y-[35px] cursor-pointer"
        alt="Instagram"
      />
      <p className="absolute top-15 left-25 text-[10px] ">clone by Dave</p>
      <div className="[&>li]:py-[10px] [&>li]:mb-[6px] [&>li]:text-[1.07em] [&>li]:pr-[7em] [&>li]:hover:bg-zinc-900 [&>li]:rounded-lg transform -translate-y-[39px]">
        <Sidebutton icon={Home} label="Home" selected={true} />
        <Sidebutton icon={Search} label="Search" selected={false} />
        <Sidebutton icon={Explore} label="Explore" selected={false} />
        <Sidebutton icon={Reels} label="Reels" selected={false} />
        <Sidebutton icon={Messages} label="Messages" selected={false} />
        <Sidebutton
          icon={Notifications}
          label="Notifications"
          selected={false}
        />
        <Sidebutton icon={Create} label="Create" selected={false} />
        <Sidebutton icon={Dashboard} label="Dashboard" selected={false} />
      </div>
    </nav>
  );
};

export default sidebar;
