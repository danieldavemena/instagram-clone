import React from "react";
import Posts from "../ui_components/posts";
import Yna from "@/public/images/Yna.png";
import Ursac from "@/public/images/ursac.jpg";

const feed = () => {
  return (
    <section className="ml-64 flex-1 ml-1/2 mr-1/2">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-10 items-center transform -translate-x-2">
          <div className="flex flex-row h-15 gap-4 mt-6 ">
            <div className=" bg-red-400 rounded-[290px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
            <div className=" bg-red-400 rounded-[500px] size-16"></div>
          </div>
          <div className="mt-3 transform -translate-x-1">
            <Posts user="callme_yna" location="Antipolo" image={Yna} />
            <Posts
              user="universityNiDanilo"
              location="Marigman St."
              image={Ursac}
            />
          </div>
        </div>
        <aside className="bg-green-500  ml-20 w-[300px] h-5"></aside>
      </div>
    </section>
  );
};

export default feed;
