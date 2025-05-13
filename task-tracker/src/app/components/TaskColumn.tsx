import React from "react";
import { Task, TaskStatus } from "../types/Task";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

interface TaskColumnProps {
  status: TaskStatus;
  tasks: Task[];
  onEditTask: (task: Task) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onDeleteTask: (taskId: number) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks,onEditTask, onDeleteTask }) => {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div ref={setNodeRef} className="bg-white shadow-lg p-4 rounded h-screen">
      <h2 className="text-xl font-bold mb-4">{status}</h2>
      <div className="overflow-y-scroll max-h-[80vh] space-y-3">
      {tasks.filter(task => task.status === status).map((task,index)=> {
        return <TaskCard key={index} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
    })}
        </div>
    </div>
  );
};

export default TaskColumn;