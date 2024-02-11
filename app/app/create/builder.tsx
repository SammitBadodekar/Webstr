"use client";
import Sidebar from "./sidebar";
import Canvas, { DNDType } from "./canvas";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PiSpinnerGapThin } from "react-icons/pi";

const Builder = () => {
  const [containers, setContainers] = useState<DNDType[]>([
    {
      id: "container-fdsfysdfhds_fjsdfhsdg_fsd",
      title: "fkdjghfjghfd",
      items: [
        {
          id: "item-cb84a724-f9e3-4c6f-b2ea-7001be3e91f6",
          title: "ouiouiouioui",
        },
      ],
    },
    {
      id: "container-fdhgfhgfhfsfysdfhds_fjsdfhsdg_fsd",
      title: "fkdjghfgfdgfdgfjghfd",
      items: [
        {
          id: "item-cbfgdfgfdg84a724-f9e3-4c6f-b2ea-7001be3e91f6",
          title: "oufg",
        },
      ],
    },
  ]);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Access the size here
    const containerSize = containerRef?.current?.getBoundingClientRect();
    setContainerWidth(containerSize?.width!);
  }, [containerRef]);
  return (
    <div
      ref={containerRef}
      className="h-[calc(100dvh_-_3.2rem)] overflow-hidden"
    >
      {containerWidth ? (
        <>
          <ResizablePanelGroup
            direction={containerWidth > 800 ? "horizontal" : "vertical"}
            className="min-h-full w-full"
          >
            <ResizablePanel
              defaultSize={containerWidth > 800 ? 80 : 60}
              className="h-full w-full"
            >
              <Canvas containers={containers} setContainers={setContainers} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={containerWidth > 800 ? 20 : 40}
              className="h-full w-full"
            >
              <Sidebar containers={containers} setContainers={setContainers} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </>
      ) : (
        <div className="flex h-[calc(100dvh_-_3.2rem)] w-full items-center justify-center">
          <PiSpinnerGapThin className="animate-spin text-3xl text-primary" />
        </div>
      )}
    </div>
  );
};
export default Builder;
