import React from "react";
import TaskColumn from "./TaskColumn";
import { Task } from "../types/Task";

interface TaskBoardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, setTasks }) => {
  const statuses: Task["status"][] = ["New", "In Progress", "Completed"];

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {statuses.map(status => (
          <TaskColumn key={status} status={status} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
  );
};

export default TaskBoard;