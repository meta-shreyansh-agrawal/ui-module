"use client"

import Image from "next/image";
import TaskBoard from "./components/TaskBoard";
import { useState } from "react";
import { Task } from "./types/Task";

const initialTasks: Task[] = [
  {
    title: "Complete React Project",
    description: "Finish the frontend for task management",
    status: "New",
    priority: "High",
    createdAt: new Date().toISOString(),
    completedAt: null,
  },
  {
    title: "Complete React Project",
    description: "Finish the frontend for task management",
    status: "New",
    priority: "High",
    createdAt: new Date().toISOString(),
    completedAt: null,
  },
  {
    title: "Complete React Project",
    description: "Finish the frontend for task management",
    status: "New",
    priority: "High",
    createdAt: new Date().toISOString(),
    completedAt: null,
  },
  {
    title: "Complete React Project",
    description: "Finish the frontend for task management",
    status: "New",
    priority: "High",
    createdAt: new Date().toISOString(),
    completedAt: null,
  },
  {
    title: "Complete React Project",
    description: "Finish the frontend for task management",
    status: "New",
    priority: "High",
    createdAt: new Date().toISOString(),
    completedAt: null,
  },
  {
    title: "Complete React Project",
    description: "Finish the frontend for task management",
    status: "New",
    priority: "High",
    createdAt: new Date().toISOString(),
    completedAt: null,
  },
];


export default function Home() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
     );
}
