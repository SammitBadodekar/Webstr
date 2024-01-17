import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";

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
        "w-full cursor-pointer rounded-xl border border-transparent bg-white px-2 py-4 shadow-md hover:border-gray-200",
        isDragging && "opacity-50",
      )}
    >
      <div className="flex items-center justify-between">
        {title}
        <button
          className="rounded-xl border p-2 text-xs shadow-lg hover:shadow-xl"
          {...listeners}
        >
          Drag Handle
        </button>
      </div>
    </div>
  );
};

export default Items;
