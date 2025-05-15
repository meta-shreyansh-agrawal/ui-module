export type TaskStatus = "New" | "In Progress" | "Completed";
export type TaskPriority = "High" | "Medium" | "Low";

export interface Task {
  id: number,
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
  completedAt: string | null;
}