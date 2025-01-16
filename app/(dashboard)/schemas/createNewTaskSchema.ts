import { Task } from "@/app/server-actions/types";
import * as yup from "yup";
import { TaskPriority, TaskStatus } from "../[id]/home/types";

export const createNewTaskSchema: yup.ObjectSchema<Task> = yup.object({
  id: yup.string().default(""),
  projectId: yup.string().default(""),
  taskName: yup.string().required().min(3).trim(),
  assignees: yup.array().required().default([]),
  timeEstimate: yup.string(),
  priority: yup.mixed<TaskPriority>().oneOf(Object.values(TaskPriority)),
  details: yup.string(),
  status: yup.mixed<TaskStatus>().oneOf(Object.values(TaskStatus)).required(),
  createdAt: yup.date().nullable(),
  dueDate: yup.date().nullable(),
});
