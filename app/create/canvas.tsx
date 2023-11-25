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
      <div className=" flex w-full items-center">
        <MdDragIndicator className=" cursor-grab text-xl" {...listeners} />
        <div className=" flex h-28 w-full items-center justify-center gap-2 rounded-md bg-gray-600 font-bold">
          <p>component</p>
          <p>{props.id} </p>
        </div>
      </div>
    </div>
  );
}

function Canvas({
  items,
  setItems,
}: {
  items: any[];
  setItems: (props: any) => void;
}) {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className=" m-1 h-[calc(100dvh_-_4.5rem)] overflow-x-hidden overflow-y-scroll p-1">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className=" grid gap-2">
            {items.map((id) => (
              <SortableItem key={id} id={id} />
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
