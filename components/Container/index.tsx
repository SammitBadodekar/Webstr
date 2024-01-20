"use client";
import React, { useState } from "react";
import ContainerProps from "./container.type";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Button } from "../ui/button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { DNDType } from "@/app/app/create/canvas";

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
  setContainers,
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "relative flex h-full w-full cursor-default items-center gap-4 bg-background px-4 text-primary",
        isDragging && "z-50",
      )}
    >
      <div
        className={`${
          isHovered ? "hover:opacity-100" : "opacity-0"
        } absolute flex h-full w-full items-center justify-start`}
      >
        <button className=" cursor-grab text-xl" {...listeners}>
          <RxDragHandleDots2 />
        </button>
        <button
          className="ml-auto mr-8 rounded-full bg-destructive p-1"
          onClick={() =>
            setContainers((prev: DNDType[]) =>
              prev.filter((element) => element.id !== id),
            )
          }
        >
          <MdOutlineDeleteOutline className="text-xl" />
        </button>
      </div>

      <div className={` h-full w-full p-2 px-8`}>
        <div className={`${isHovered && "border-2 border-primary"} p-2`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
