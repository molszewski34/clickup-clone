export interface TaskElement {
  id: string;
  title: string;
  status: TaskStatus;
  assignees: string[];
  dueDate: string;
  priority: TaskPriority;
  subtasks: TaskElement[];
}

export enum TaskStatus {
  todo = "To do",
  inProgress = "In Progress",
  completed = "Completed",
}

export enum TaskPriority {
  urgent = "Urgent",
  high = "High",
  normal = "Normal",
  low = "Low",
  none = "",
}

export interface FlatTaskElement {
  id: string;
  level: number;
  parentId: string | null;
  title: string;
  status: TaskStatus;
  assignees: string[];
  dueDate: string;
  priority: TaskPriority;
  numberOfSubtasks: number;
}
