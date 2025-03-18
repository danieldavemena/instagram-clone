import React from "react";
import Posts from "../ui_components/posts";
import Asideuser from "../ui_components/asideuser";
import Yna from "@/public/images/Yna.png";
import Ursac from "@/public/images/ursac.jpg";
import Wheel from "@/public/images/wheel.png";
import DpNiDanilo from "@/public/images/dpNiDanilo.jpg";

const feed = () => {
  return (
    <section className="ml-64 flex flex-1 w-full flex-col items-center">
      <div className="flex flex-row  justify-center">
        <div className="flex flex-col gap-10 items-center transform -translate-x-1">
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
            <Posts
              user="callme_yna"
              location="Mambugan"
              image={Yna}
              profileImage={Wheel}
            />
            <Posts
              user="universityNiDanilo"
              location="Marigman St."
              image={Ursac}
              profileImage={DpNiDanilo}
            />
          </div>
        </div>
        <aside className="pl-4.5 pt-9.5 flex flex-col flex-1 items-end ml-15 w-[323px] [&>*]:w-[305px]">
          <Asideuser
            username="isnotdave_"
            description="Dave"
            button="Switch"
            isUser
          />
          <div className="flex mb-3.5 flex-row items-center mt-6 text-[14px]  ">
            <p className="ml-0 mr-auto text-zinc-400">Suggested for you</p>
            <p className="mr-5 ml-auto text-[11px] font-bold">See All</p>
          </div>
          <div className="pl-[5px]">
            <Asideuser
              username="notyour_dayv"
              description="Followed by blabla"
              button="Follow"
              isUser={false}
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default feed;
