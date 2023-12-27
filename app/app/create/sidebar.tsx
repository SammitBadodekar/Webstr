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
}: {
  items: any[];
  setItems: (props: any) => void;
}) => {
  const addItem = (item: any) => {
    setItems((prev: any) => [item, ...prev]);
  };

  return (
    <div
      className={`h-full bg-secondaryLightTheme shadow transition-all ease-out dark:bg-darkGray `}
    >
      <Tabs defaultValue="insert" className="p-2">
        <TabsList className="xs-scrollbar flex h-full w-full justify-start overflow-x-scroll dark:bg-darkGray">
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
