import React from 'react'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from '@dnd-kit/core';

export type TaskType = {
    id: UniqueIdentifier;
    title: string;
}

function Task({ id, title }: TaskType) {
    const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border border-violet-600 p-2"
    >
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  )
}

export default Task
