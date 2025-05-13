"use client"

import Image from "next/image";
import TaskBoard from "./components/TaskBoard";
import { useState } from "react";
import { Task } from "./types/Task";
import TaskModal from "./components/TaskModal";


export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

   const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleOpenModal = (task?:Task) => {
    setSelectedTask(task||null);
    setModalOpen(true);
  }
  
 const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

  const handleSaveTask = (task: Task) => {
    if (selectedTask) {
      setTasks(tasks.map(t => (t.id === selectedTask.id ? task : t)));
    } else {
      setTasks([...tasks, { ...task, id: tasks.length + 1, status: "New" }]);
    }
    handleCloseModal();
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <button onClick={()=>handleOpenModal()} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">
        + Add Task
      </button>
      <TaskBoard tasks={tasks} setTasks={setTasks} onEditTask={handleOpenModal} onDeleteTask={handleDeleteTask} />
          <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveTask} task={selectedTask} />
    </div>
     );
}
