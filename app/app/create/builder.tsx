"use client";
import Sidebar from "./sidebar";
import Canvas from "./canvas";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PiSpinnerGapThin } from "react-icons/pi";

const Builder = () => {
  const [items, setItems] = useState([1]);
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
              <Canvas items={items} setItems={setItems} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={containerWidth > 800 ? 20 : 40}
              className="h-full w-full"
            >
              <Sidebar items={items} setItems={setItems} />
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
