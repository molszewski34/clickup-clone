import * as yup from "yup";
import { Task } from "@/app/server-actions/types";
import { TaskPriority, TaskStatus } from "../[id]/home/types";
import { Timestamp } from "firebase/firestore";
// @ts-expect-error TS2322: yup type is incompatible with Timestamp from firebase
export const createNewTaskSchema: yup.ObjectSchema<Task> = yup.object({
  id: yup.string().default(""),
  taskName: yup.string().required().min(3).trim(),
  assignees: yup.array().required().default([]),
  createdAt: yup.mixed<Timestamp>().defined().notRequired(),
  lastUpdated: yup.mixed<Timestamp>().defined().notRequired(),
  status: yup.mixed<TaskStatus>().oneOf(Object.values(TaskStatus)).required(),
  dueDate: yup.date().nullable(),
  timeEstimate: yup.string(),
  priority: yup.mixed<TaskPriority>().oneOf(Object.values(TaskPriority)),
  details: yup.string(),
  subtasks: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().default(""),
        taskName: yup.string().required().min(3).trim(),
        assignees: yup.array().required().default([]),
        createdAt: yup.mixed<Timestamp>().defined().notRequired(),
        lastUpdated: yup.mixed<Timestamp>().defined().notRequired(),
        status: yup
          .mixed<TaskStatus>()
          .oneOf(Object.values(TaskStatus))
          .required(),
        dueDate: yup.date().nullable(),
        timeEstimate: yup.date().nullable(),
        priority: yup.mixed<TaskPriority>().oneOf(Object.values(TaskPriority)),
        details: yup.string().required(),
        subtasks: yup.array(), // Można zagnieżdżać dalej
      })
    )
    .nullable(),
});
