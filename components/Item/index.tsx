"use client";

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { RxDragHandleDots2 } from "react-icons/rx";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "relative w-full cursor-default bg-popover p-4 shadow-md",
        isDragging && "z-50",
      )}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 flex  items-start justify-center opacity-0 hover:opacity-100">
        <button className="rotate-90 cursor-grab text-xl" {...listeners}>
          <RxDragHandleDots2 />
        </button>
      </div>
      <div className="flex items-center justify-between">{title}</div>
    </div>
  );
};

export default Items;
