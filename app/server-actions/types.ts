import { Timestamp } from "firebase/firestore";
import { TaskPriority, TaskStatus } from "../(dashboard)/[id]/home/types";

export type Task = {
  id?: string;
  taskName: string;
  assignees: User[];
  createdAt: Timestamp;
  status: TaskStatus;
  dueDate: Date | null;
  timeEstimate: Date | null;
  priority: TaskPriority;
  lastUpdated: Timestamp;
  details: string;
  subtasks?: Task[];
};

export type User = {
  id: string;
  signUpFullName: string;
  signUpEmail: string;
  activeWorkspace: string;
  lastActive: Timestamp;
  userId: string;
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
  filtersState: {
    isOpen: boolean;
    searchQuery: string;
    assignedToMe: boolean;
    assignedTo: string[];
    statuses: string[];
  };
};

export type NewDefaultSpace = Omit<Space, "id" | "createdAt">;

export interface List {
  id: string;
  createdAt: string;
  name: string;
  isPrivate: boolean;
}

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

export type UserTaskAssociation = {
  id: string;
  userId: string;
  taskId: string;
};

export type Icon = {
  activeColor: string;
  selectedIconName: string | null;
};
