"use client";
import Sidebar from "./sidebar";
import Canvas from "./canvas";
import { WebElement } from "@/types";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
} from "reactflow";

import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";

const Builder = () => {
  const [items, setItems] = useState([1]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedElement, setSelectedElement] = useState<WebElement | null>(
    null
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="flex w-full">
      {!selectedElement ? (
        <>
          <div
            className={`${
              isSidebarOpen
                ? " w-full md:w-[calc(100%_-_16rem)]"
                : "w-[calc(100%_-_1rem)]"
            } transition-all ease-out`}
          >
            <Canvas
              items={items}
              setItems={setItems}
              setSelectedElement={setSelectedElement}
            />
          </div>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            items={items}
            setItems={setItems}
          />
        </>
      ) : (
        <div className=" flex h-[calc(100dvh_-_5rem)] w-full flex-col items-center justify-center gap-4 p-4 transition-all">
          <Button
            onClick={() => setSelectedElement(null)}
            className=" mt-4 rounded-full"
          >
            Back
          </Button>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="top-right"
            className=" h-full w-full rounded-md border-2 border-gray-500"
          >
            <Background gap={12} size={1} />
          </ReactFlow>
        </div>
      )}
    </div>
  );
};

export default Builder;

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
