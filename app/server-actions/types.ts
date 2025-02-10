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

export enum TargetType {
  workspace = "Workspace",
  space = "Space",
  folder = "Folder",
  list = "List",
}

export type TargetId = Workspace["id"] | Space["id"]; //Karol TODO: add List id and Folder id when implementing;

export type UserAssociation = {
  id: string;
  targetType: TargetType;
  userId: User["id"];
  targetId: TargetId;
  role: Role;
  joinedAt: Date;
};

export type Icon = {
  activeColor: string;
  selectedIconName: string | null;
};
