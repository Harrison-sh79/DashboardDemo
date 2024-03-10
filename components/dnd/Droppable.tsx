import React from "react";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";

export function Droppable({ children, id }: { children?: React.ReactNode, id:UniqueIdentifier }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="border w-[100px]">
      {children}
    </div>
  );
}
