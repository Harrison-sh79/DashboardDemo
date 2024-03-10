import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";
import Task, { TaskType } from "./Task";

function Column({ id, tasks }: { id:string, tasks: TaskType[] }) {
  return (
    <div className="flex flex-col border-2 border-violet-800 gap-3 p-3">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
}

export default Column;
