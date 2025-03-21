import React from "react";
import Posts from "../ui_components/posts";
import Asideuser from "../ui_components/asideuser";
import Storyuser from "../ui_components/storyuser";
import Yna from "@/public/images/Yna.png";
import Ursac from "@/public/images/ursac.jpg";
import Wheel from "@/public/images/wheel.png";
import DpNiDanilo from "@/public/images/dpNiDanilo.jpg";
import Bebe from "@/public/images/Bebe.jpg";
import Palpitate from "@/public/images/Palpitate.png";
import Profile from "@/public/images/profile.jpg";
import Octo from "@/public/images/likha-octo.png";
import YnaProfile from "@/public/images/yna_profile.jpg";

const feed = () => {
  return (
    <section className="ml-64 flex flex-1 w-full flex-col items-center">
      <div className="flex flex-row  justify-center">
        <div className="flex flex-col gap-10 items-center transform -translate-x-[5px]">
          <div className="flex flex-row h-15 gap-4 mt-6 w-[624px] [&>:not(:first-child)]:-ml-[4px] transform -translate-x-[2px]">
            <Storyuser profileImage={Yna} username="callmee_yna" />
            <Storyuser profileImage={Ursac} username="ursac" />
            <Storyuser
              profileImage={DpNiDanilo}
              username="universityNiDanilo"
            />
            <Storyuser profileImage={Bebe} username="yna_cutiepie" />
            <Storyuser profileImage={Yna} username="callmee_yna" />
            <Storyuser profileImage={Ursac} username="ursac" />
            <Storyuser
              profileImage={DpNiDanilo}
              username="universityNiDanilo"
            />
            <Storyuser profileImage={Bebe} username="yna_cutiepie" />
          </div>
          <div className="mt-3 transform -translate-x-1">
            <Posts
              user="isnotdave_"
              image={Palpitate}
              location=""
              profileImage={Profile}
            />
            <Posts
              user="callmee_yna"
              image={Octo}
              location="Sa Bahay"
              profileImage={YnaProfile}
            />
            <Posts
              user="callmee_yna"
              location="Mambugan"
              image={Yna}
              profileImage={YnaProfile}
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
            <p className="ml-0 mr-auto font-semibold text-zinc-400">
              Suggested for you
            </p>
            <p className="mr-5 ml-auto text-[11px] font-bold cursor-pointer">
              See All
            </p>
          </div>
          <div className="pl-[5px] [&>:not(:first-child)]:mt-[17px]">
            <Asideuser
              username="apple_pie"
              description="Followed by blabla"
              button="Follow"
              isUser={false}
            />
            <Asideuser
              username="ninja_bisaya"
              description="Followed by univerityNiDanilo"
              button="Follow"
              isUser={false}
            />
            <Asideuser
              username="indian_baktol"
              description="Followed by arabongKalabaw"
              button="Follow"
              isUser={false}
            />
            <Asideuser
              username="allen.kalbo21"
              description="Followed by markbakla"
              button="Follow"
              isUser={false}
            />
            <Asideuser
              username="arabongKalabaw"
              description="Followed by patinginNgTitle"
              button="Follow"
              isUser={false}
            />
          </div>
          <footer className="mt-[40px]">
            <p className="insta font-light text-[12.2px] leading-5 text-zinc-500">
              About ꞏ Help ꞏ Press ꞏ API ꞏ Jobs ꞏ Privacy ꞏ Terms ꞏ Locations ꞏ
              Language ꞏ Meta Verified
            </p>
            <p className="mt-4 insta font-light text-[12.2px] leading-5 text-zinc-500">
              © 2025 INSTAGRAM FROM META
            </p>
          </footer>
        </aside>
      </div>
    </section>
  );
};

export default feed;
