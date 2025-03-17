import React from "react";
import Sidebar from "../ui/sidebar";
import Feed from "../ui/feed";

const home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default home;
