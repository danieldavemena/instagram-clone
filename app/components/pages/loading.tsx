"use client";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const loading = () => {
  const videos = {
    dark: "/loading/Loading.mp4",
    light: "/loading/Loading-light.mp4",
  };

  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <main>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center w-[600px]">
          <video autoPlay playsInline muted>
            <source src={isDark ? videos.dark : videos.light} />
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
