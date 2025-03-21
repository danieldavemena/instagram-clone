"use client";
import React, { useEffect, useState } from "react";
import Home from "./components/pages/home";
import Loading from "./components/pages/loading";

const page = () => {
  const [page, setPage] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setPage(<Home />);
    }, 5000);
  });
  return <div>{page}</div>;
};

export default page;
