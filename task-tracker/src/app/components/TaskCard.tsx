import React from "react";
import { Task } from "../types/Task";

const priorityColors: Record<Task["priority"], string> = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className={`p-4 rounded ${priorityColors[task.priority]} text-white`}>
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm">{task.status}</p>
    </div>
  );
};

export default TaskCard;