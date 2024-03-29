"use client";
import {
  DndContext,
  DragCancelEvent,
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import React from "react";
import { Draggable } from "@/components/dnd/Draggable";
import { Droppable } from "@/components/dnd/Droppable";

const defaultAnnouncements = {
  onDragStart({ active }: DragStartEvent) {
    return `Picked up draggable item ${active.id}.`;
  },
  onDragOver({ active, over }: DragEndEvent) {
    if (over) {
      return `Draggable item ${active.id} was moved over droppable area ${over.id}.`;
    }

    return `Draggable item ${active.id} is no longer over a droppable area.`;
  },
  onDragEnd({ active, over }: DragEndEvent) {
    if (over) {
      return `Draggable item ${active.id} was dropped over droppable area ${over.id}`;
    }

    return `Draggable item ${active.id} was dropped.`;
  },
  onDragCancel({ active }: DragCancelEvent) {
    return `Dragging was cancelled. Draggable item ${active.id} was dropped.`;
  },
};

function InfluencerCompaignsPopularPage() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = React.useState<UniqueIdentifier | null>(null);

  const [isDropped, setIsDropped] = React.useState(false);

  const draggableMarkup = (
    <Draggable id="draggable">
      <div className="h-[50px] w-[50px] bg-violet-400">Drag me</div>
    </Draggable>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  return (
    <div>
      <DndContext
        onDragEnd={handleDragEnd}
        accessibility={{ announcements: defaultAnnouncements }}
      >
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? (
              draggableMarkup
            ) : (
              <div className="h-[50px] w-[50px] bg-gray-600">Drop here</div>
            )}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );
}

export default InfluencerCompaignsPopularPage;
