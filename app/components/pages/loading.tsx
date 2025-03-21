"use client";
import React, { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import ReactPlayer from "react-player";
// import BackgroundVideo from "next-video/background-video";
// import loadinganimation from "@/videos/Loading.mp4";

const loading = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Autoplay failed:", err);
        });
      }
    };

    if (document.readyState === "complete") {
      playVideo();
    } else {
      window.addEventListener("load", playVideo);
    }

    return () => window.removeEventListener("load", playVideo);
  }, []);

  return (
    <main>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center w-[600px]">
          {/* <BackgroundVideo
            loop={false}
            src={loadinganimation}
            autoPlay
            className="object-cover"
          /> */}
          <video ref={videoRef} autoPlay playsInline muted>
            <source src="/loading/Loading.mp4" />
          </video>
          <p className="text-center text-zinc-400 text-sm  transform -translate-y-10">
            This project is an independent UI clone made for educational
            purposes only and is not affiliated with Instagram or Meta
            Platforms, Inc. All trademarks and assets belong to their respective
            owners.
          </p>
          <div className="loader"></div>
        </div>
      </div>
    </main>
  );
};

export default loading;
