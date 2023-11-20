"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Canvas from "./canvas";

const Page = () => {
  const [items, setItems] = useState([1]);
  return (
    <div className="">
      <Header />
      <div className="flex w-full  ">
        <div className=" w-full">
          <Canvas items={items} setItems={setItems} />
        </div>
        <Sidebar items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default Page;
