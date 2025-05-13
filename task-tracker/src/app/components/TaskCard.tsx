import React from "react";
import { Task } from "../types/Task";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDraggable } from "@dnd-kit/core";

const priorityColors: Record<Task["priority"], string> = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

interface TaskCardProps {
  task: Task;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEditTask, onDeleteTask }) => {

    const { attributes, listeners, setNodeRef } = useDraggable({ id: task.id.toString() });

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} className={`p-4 rounded ${priorityColors[task.priority]} text-white`}>
      <div>
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm">{task.status}</p>
      </div>
      { task.status!="Completed" && <div>
      <button onClick={() => onEditTask(task)} className="text-white hover:text-gray-300">
        <FaEdit size={20} />
      </button>
      <button onClick={() => onDeleteTask(task.id)} className="text-white hover:text-gray-300">
          <FaTrash size={20} />
      </button>
      </div>}
    </div>
    
  );
};

export default TaskCard;