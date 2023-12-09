"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let counter = 1;

const Sidebar = ({
  items,
  setItems,
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  items: any[];
  setItems: (props: any) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (props: any) => void;
}) => {
  const addItem = (item: any) => {
    setItems((prev: any) => [item, ...prev]);
  };

  return (
    <div
      className={` ${
        isSidebarOpen ? "" : "translate-x-full"
      } absolute right-2 m-2 h-[calc(100dvh_-_4.5rem)] w-60 max-w-sm rounded-lg bg-secondaryLightTheme p-2 shadow transition-transform ease-out dark:bg-darkGray`}
    >
      <button
        className="  absolute -left-4 top-1/2 rounded-full border-2 border-gray-500 bg-secondaryLightTheme p-2 font-bold dark:bg-darkGray"
        onClick={() => setIsSidebarOpen((prev: boolean) => !prev)}
      >
        {isSidebarOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </button>
      <Tabs defaultValue="insert">
        <TabsList className=" w-full dark:bg-darkGray">
          <TabsTrigger value="insert">Insert</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="themes">Themes</TabsTrigger>
        </TabsList>
        <Separator className=" my-1 bg-slate-500" />
        <TabsContent value="insert">
          <Button
            variant="outline"
            className=" m-8"
            onClick={() => {
              addItem(counter + 1);
              counter++;
            }}
          >
            Add Element
          </Button>
        </TabsContent>
        <TabsContent value="pages">Change your pages here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Sidebar;
