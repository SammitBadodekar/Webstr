import React, { useState } from "react";
import Sidebar from "./sidebar";
import Canvas from "./canvas";

const Builder = () => {
  const [items, setItems] = useState([1]);
  return (
    <div className="flex w-full  ">
      <div className=" w-full">
        <Canvas items={items} setItems={setItems} />
      </div>
      <Sidebar items={items} setItems={setItems} />
    </div>
  );
};

export default Builder;
