import React from "react";
import TaskColumn from "./TaskColumn";
import { Task } from "../types/Task";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

interface TaskBoardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, setTasks,onEditTask,onDeleteTask }) => {
  const statuses: Task["status"][] = ["New", "In Progress", "Completed"];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === parseInt(active.id as string) ? { ...task, status: over.id as Task["status"] } : task
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {statuses.map(status => (
          <TaskColumn key={status} status={status} tasks={tasks} setTasks={setTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ))}
      </div>
        </DndContext>
  );
};

export default TaskBoard;