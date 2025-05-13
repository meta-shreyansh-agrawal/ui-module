import React, { useState, useEffect } from "react";
import { Task } from "../types/Task";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, task }) => {
  const [taskData, setTaskData] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    status: "New",
    priority: "Medium",
    createdAt: new Date().toISOString(),
    completedAt: null,
  });

  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(taskData);
    setTaskData({
    id: 0,
    title: "",
    description: "",
    status: "New",
    priority: "Medium",
    createdAt: new Date().toISOString(),
    completedAt: null,
  })
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">{task ? "Edit Task" : "Create Task"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded mb-2"
            value={taskData.title}
            onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded mb-2"
            value={taskData.description}
            onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
          />
          <select
            className="w-full p-2 border rounded mb-2"
            value={taskData.priority}
            onChange={(e) => setTaskData({ ...taskData, priority: e.target.value as Task["priority"] })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {task && <select
            className="w-full p-2 border rounded mb-2"
            value={taskData.status}
            onChange={(e) => setTaskData({ ...taskData, status: e.target.value as Task["status"] })}
          >
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>}
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
            {task ? "Save Changes" : "Create Task"}
          </button>
        </form>
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;