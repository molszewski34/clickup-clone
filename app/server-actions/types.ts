import { TaskPriority, TaskStatus } from "../(dashboard)/[id]/home/types";

export interface Task {
  id: string;
  taskName: string;
  projectId: string;
  createdAt?: Date | null;
  status: TaskStatus;
  dueDate?: Date | null;
  assignees: User[];
  timeEstimate?: string;
  priority?: TaskPriority;
  details?: string;
}

export type User = {
  id: string;
  signUpFullName: string;
  signUpEmail: string;
  createdAt?: Date;
  lastActive?: Date;
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
  description: string;
}

export type Space = {
  id: string;
  name: string;
  isPrivate: boolean;
  description?: string;
  icon?: Icon;
};

export enum Role {
  admin = "Admin",
  member = "Member",
  guest = "Guest",
}

export type UserAssociation = {
  id: string;
  userId: User["id"];
  userEmail: User["signUpEmail"];
  userFullName: User["signUpFullName"];
  userLastActive: User["lastActive"];
  workspaceId: Workspace["id"];
  role: Role;
  joinedAt: Date;
};

export type Icon = {
  activeColor: string;
  selectedIconName: string | null;
};
