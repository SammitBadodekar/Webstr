"use client";

import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React, { use, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { RxDragHandleDots2 } from "react-icons/rx";
import dynamic from "next/dynamic";

const Components: any = {
  text: dynamic(() => import("../elements/text/editor-text"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }),
};

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
  component: string;
};

const Items = ({ id, title, component }: ItemsType) => {
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

  const [isHovered, setIsHovered] = useState(false);

  /* if (typeof Components[component] !== "undefined") {
    return React.createElement(Components[component], {
      key: id,
    });
  } */

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx("relative w-full cursor-default", isDragging && "z-50")}
    >
      <div
        className={`${
          isHovered ? "opacity-100" : "opacity-0"
        } absolute bottom-0 left-0 right-0 top-0  flex items-start justify-center`}
      >
        <button className="z-10 rotate-90 cursor-grab  text-xl" {...listeners}>
          <RxDragHandleDots2 />
        </button>
      </div>
      <div className="flex items-center justify-between">
        {React.createElement(Components[component], {
          key: id,
        })}
      </div>
    </div>
  );
};

export default Items;
