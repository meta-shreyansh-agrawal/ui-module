import React from "react";
import TaskColumn from "./TaskColumn";
import { Task } from "../types/Task";

interface TaskBoardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, setTasks,onEditTask,onDeleteTask }) => {
  const statuses: Task["status"][] = ["New", "In Progress", "Completed"];

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {statuses.map(status => (
          <TaskColumn key={status} status={status} tasks={tasks} setTasks={setTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ))}
      </div>
  );
};

export default TaskBoard;