export type User = {
  uid: string;
  name?: string;
  email?: string;
  id: string;
  signUpFullName: string;
  signUpEmail: string;
};

export interface Task {
  id: string;
  taskName: string;
  name: string;
  projectId: string;
  taskId: string;
  createdAt: Date;
  status: string;
  dueDate?: Date | null;
  assignees?: User[];
  timeEstimate?: string;
  priority?: string;
  details?: string;
}

export interface Project {
  id?: string;
  name?: string;
  createdAt?: string;
  desc?: string;
  userId?: string;
  workspaceId?: string;
  isPrivate?: boolean;
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
