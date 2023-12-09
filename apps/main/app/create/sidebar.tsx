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
        isSidebarOpen ? "my-2 w-60 p-2" : "m-0 w-0 translate-x-full p-0 md:p-2"
      } absolute right-2 h-[calc(100dvh_-_4.5rem)]  max-w-sm rounded-lg bg-secondaryLightTheme  shadow transition-all ease-out dark:bg-darkGray md:m-2`}
    >
      <button
        className={` ${
          isSidebarOpen ? "-left-4" : " -left-7"
        } absolute  top-1/2 rounded-full border-2 border-gray-500 bg-secondaryLightTheme p-2 font-bold dark:bg-darkGray`}
        onClick={() => setIsSidebarOpen((prev: boolean) => !prev)}
      >
        {isSidebarOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </button>
      <Tabs
        defaultValue="insert"
        className={`${!isSidebarOpen ? "hidden" : ""}`}
      >
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
