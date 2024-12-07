export interface Task {
  name: string;
  projectId: string;
  taskId: string;
  createdAt: Date;
  status: string;
  dueDate?: Date | null;
  assignees?: Assignee[];
  timeEstimate?: string;
  priority?: string;
  details?: string;
}

export interface Assignee {
  uid: string;
  name?: string;
  email?: string;
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
  icon: string | Icon[];
  isPrivate: boolean;
  userId: string;
}

export type Icon = {
  activeColor: string;
  selectedIconName: string;
};
