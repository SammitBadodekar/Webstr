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

function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className=" cursor-grab"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div>
        <p>{props.id}</p>
        <div className=" flex h-40 items-center justify-center rounded-md bg-gray-600 font-bold">
          Drag to move
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
    <div className=" m-2 h-[calc(100dvh_-_4rem)] overflow-x-hidden overflow-y-scroll p-2">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
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
