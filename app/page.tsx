"use client";
import React, { useEffect, useState } from "react";
import Home from "./components/pages/home";
import Loading from "./components/pages/loading";
import dynamic from "next/dynamic";

const DyanamicLoading = dynamic(() => import("./components/pages/loading"), {
  ssr: false,
});

const page = () => {
  const [page, setPage] = useState(<DyanamicLoading />);

  useEffect(() => {
    setTimeout(() => {
      setPage(<Home />);
    }, 5000);
  });
  return <div>{page}</div>;
};

export default page;
