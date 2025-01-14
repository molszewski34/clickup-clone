import { TaskPriority, TaskStatus } from "../(dashboard)/[id]/home/types";

export interface Task {
  id: string;
  taskName: string;
  projectId: string;
  createdAt?: Date;
  status: TaskStatus;
  dueDate?: Date | null;
  assignees: User[];
  timeEstimate?: string;
  priority?: TaskPriority | "";
  details?: string;
}

export type User = {
  id: string;
  signUpFullName: string;
  signUpEmail: string;
};

export interface Project {
  id?: string;
  name?: string;
  createdAt?: string;
  desc?: string;
  userId?: string;
  workspaceId?: string;
  isPrivate?: boolean;
  tasks: Task[];
}

export interface Workspace {
  id: string;
  name: string;
  createdAt: string;
  desc: string;
  icon: Icon | string;
  isPrivate: boolean;
  userId: string;
}

export type Icon = {
  activeColor: string;
  selectedIconName: string | null;
};
