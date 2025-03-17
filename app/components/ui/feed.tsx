import React from "react";
import Posts from "../ui_components/posts";

const feed = () => {
  return (
    <section className="ml-64 flex-1">
      <div className="flex flex-row">
        <div className="flex flex-col w-[65%] h-full justify-center items-center">
          <div className="bg-red-500 h-15"></div>
          <main className="">
            <Posts />
          </main>
        </div>
        <aside className="bg-green-500 w-[35%] h-5"></aside>
      </div>
    </section>
  );
};

export default feed;
