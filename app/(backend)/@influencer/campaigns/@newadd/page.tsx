"use client";
import React from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragEndEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Input from "@/components/backend/compaigns/newadd/Input";
import Column from "@/components/backend/compaigns/newadd/Column";
import {
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function InfluencerCompaignsNewAddedPage() {
  const [tasks, setTasks] = React.useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title: string) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTaskPos = (id: UniqueIdentifier | undefined) =>
    tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over?.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };


  return (
    <div>
      <h1>My Tasks ✅</h1>
      <Input onSubmit={addTask} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col border-2 border-violet-800 gap-3 p-3">
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
              <Column id="Todo" tasks={tasks}/>
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
}

export default InfluencerCompaignsNewAddedPage;
