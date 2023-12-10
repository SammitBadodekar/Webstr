"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  TouchSensor,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { MdDragIndicator } from "react-icons/md";

function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="" ref={setNodeRef} style={style} {...attributes}>
      <div className=" flex h-full w-full items-center">
        <MdDragIndicator
          className=" h-full w-8 cursor-grab p-1 text-xl"
          {...listeners}
        />
        <div className=" relative flex h-28 w-full items-center justify-center gap-2 rounded-md bg-gray-400 font-bold dark:bg-gray-600">
          <p>component</p>
          <p>{props.id} </p>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-4 rounded-md bg-lightTransparent opacity-0 transition-opacity hover:opacity-100 hover:backdrop-blur dark:bg-darkTransparent">
            <Button
              onClick={() => {
                console.log("clicked");
                props.setSelectedElement({ id: 1, name: "gfdgfd" });
              }}
            >
              Edit
            </Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Canvas({
  items,
  setItems,
  setSelectedElement,
}: {
  items: any[];
  setItems: (props: any) => void;
  setSelectedElement: (props: any) => void;
}) {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className=" h-[calc(100dvh_-_4.5rem)] overflow-x-hidden overflow-y-scroll p-2 md:m-2 md:p-2">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className=" grid gap-2">
            {items.map((id) => (
              <SortableItem
                key={id}
                id={id}
                setSelectedElement={setSelectedElement}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items: any) => {
        const oldIndex = items.indexOf(active?.id);
        const newIndex = items.indexOf(over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default Canvas;
