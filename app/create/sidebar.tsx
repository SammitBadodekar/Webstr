"use client";
import { Button } from "@/components/ui/button";
import React from "react";

let counter = 1;

const Sidebar = ({
  items,
  setItems,
}: {
  items: any[];
  setItems: (props: any) => void;
}) => {
  const addItem = (item: any) => {
    setItems((prev: any) => [item, ...prev]);
  };
  return (
    <div className=" m-2 h-[calc(100dvh_-_3.5rem)] w-[30vw] max-w-sm rounded-lg bg-secondaryLightTheme p-2 shadow dark:bg-darkGray">
      <Button
        onClick={() => {
          addItem(counter + 1);
          counter++;
        }}
      >
        Add Item
      </Button>
    </div>
  );
};

export default Sidebar;
