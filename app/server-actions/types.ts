import { TaskPriority, TaskStatus } from "../(dashboard)/[id]/home/types";

export type Task = {
  id?: string;
  taskName: string;
  assignees: User[];
  createdAt: Date;
  status: TaskStatus;
  dueDate: Date | null;
  timeEstimate: Date | null;
  priority: TaskPriority;
  lastUpdated: Date;
  details: string;
  subtasks?: Task[];
};

export type User = {
  id: string;
  signUpFullName: string;
  signUpEmail: string;
  userId: string;
  createdAt?: Date;
  lastActive?: Date;
  activeWorkspace: Workspace["id"];
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
  createdAt?: string;
  name: string;
  isPrivate: boolean;
  desc?: string;
  icon?: Icon;
};

export type NewDefaultSpace = Omit<Space, "id" | "createdAt">;

export type List = {
  id: string;
  createdAt: string;
  name: string;
  isPrivate: string;
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
