import React from "react";

const sidebar = () => {
  return (
    <nav className="fixed w-64 left-0 insta h-screen p-4 pt-[2.5em] list-none [&>li]:px-[10px] [&>li]:py-[10px] [&>li]:mb-[10px] [&>li]:text-[1.07em] [&>li]:pr-[7em] [&>li]:hover:bg-zinc-900 [&>li]:rounded-lg bg-black border-r-1 border-r-zinc-900">
      <a href="" className="ml-2 text-xl ">
        Instagram
      </a>
      <li className="mt-10">
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
