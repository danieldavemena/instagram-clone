import React from "react";
import Image from "next/image";
import LogoWhite from "@/public/vectors/instagram-logo-white.svg";

const sidebar = () => {
  return (
    <nav className="fixed w-61 left-0 insta h-screen p-4 pt-[2.5em] list-none [&>li]:px-[10px] [&>li]:py-[10px] [&>li]:mb-[11px] [&>li]:text-[1.07em] [&>li]:pr-[7em] [&>li]:hover:bg-zinc-900 [&>li]:rounded-lg bg-black border-r-1 border-r-zinc-800 [&>li]:transform [&>li]:-translate-y-9">
      <Image
        src={LogoWhite}
        className="w-25.5 ml-2 transform -translate-y-9"
        alt="Instagram"
      />
      <li className="">
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Search</a>
      </li>
      <li>
        <a href="">Button</a>
      </li>
      <li>
        <a href="">Button</a>
      </li>
      <li>
        <a href="">Button</a>
      </li>
      <li>
        <a href="">Button</a>
      </li>
    </nav>
  );
};

export default sidebar;
