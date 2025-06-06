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
import Profile from "@/public/images/profile.jpg";

const sidebar = () => {
  return (
    <nav className="fixed w-[244.5px] left-0 insta h-screen p-3 pt-[2.5em] list-none    bg-[var(--background)] border-r-1 border-r-zinc-800 not-dark:border-r-zinc-200  ">
      <Image
        src={LogoWhite}
        className="not-dark:invert w-25.5 h-10 mt-[30px] mb-[32px] object-cover translate-x-[12px] transform -translate-y-[35px] cursor-pointer"
        alt="Instagram"
      />
      <p className="absolute top-15 left-25 text-[10px] ">clone by Dave</p>
      <div className="[&>li]:py-[10px] [&>li]:mb-[6px] [&>li]:text-[1.07em] [&>li]:pr-[7em] [&>li]:hover:bg-zinc-900 not-dark:[&>li]:hover:bg-zinc-100 [&>li]:rounded-lg transform -translate-y-[39px]">
        <Sidebutton icon={Home} label="Home" selected={true} isicon={true} />
        <Sidebutton
          icon={Search}
          label="Search"
          selected={false}
          isicon={true}
        />
        <Sidebutton
          icon={Explore}
          label="Explore"
          selected={false}
          isicon={true}
        />
        <Sidebutton icon={Reels} label="Reels" selected={false} isicon={true} />
        <Sidebutton
          icon={Messages}
          label="Messages"
          selected={false}
          isicon={true}
        />
        <Sidebutton
          icon={Notifications}
          label="Notifications"
          selected={false}
          isicon={true}
        />
        <Sidebutton
          icon={Create}
          label="Create"
          selected={false}
          isicon={true}
        />
        <Sidebutton
          icon={Dashboard}
          label="Dashboard"
          selected={false}
          isicon={true}
        />
        <Sidebutton
          icon={Profile}
          label="Profile"
          selected={false}
          isicon={false}
        />
      </div>
    </nav>
  );
};

export default sidebar;
