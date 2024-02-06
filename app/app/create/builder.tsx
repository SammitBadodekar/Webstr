"use client";
import Sidebar from "./sidebar";
import Editor from "./canvas";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PiSpinnerGapThin } from "react-icons/pi";
import { OutputData } from "@editorjs/editorjs";

const Builder = () => {
  const [containers, setContainers] = useState<OutputData>();
  const [mounted, setMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(containers);

  useEffect(() => {
    const items = localStorage.getItem("items");
    console.log(items);
  }, []);

  useEffect(() => {
    if (containers) {
      localStorage.setItem("items", JSON.stringify(containers));
    }
  }, [containers]);

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
              className="h-full w-full overflow-y-scroll"
            >
              {mounted && (
                <Editor
                  data={containers}
                  onChange={setContainers}
                  holder="editorjs"
                />
              )}
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={containerWidth > 800 ? 20 : 40}
              className="h-full w-full"
            >
              <Sidebar containers={containers!} setContainers={setContainers} />
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
