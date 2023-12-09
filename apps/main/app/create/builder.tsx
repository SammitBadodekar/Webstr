"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Canvas from "./canvas";

const Builder = () => {
  const [items, setItems] = useState([1]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex w-full">
      <div
        className={`${
          isSidebarOpen ? "w-[calc(100%_-_16rem)]" : "w-[calc(100%_-_1rem)]"
        } transition-all ease-out`}
      >
        <Canvas items={items} setItems={setItems} />
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        items={items}
        setItems={setItems}
      />
    </div>
  );
};

export default Builder;
