"use client";
import { TaskPriority, TaskStatus } from "@/app/(dashboard)/[id]/home/types";
import { Task } from "@/app/server-actions/types";
import React, { createContext, useContext, useState } from "react";

type TaskFormContext = {
  formData: Task;
  setFormData: (arg: Task) => void;
};

const TaskFormContext = createContext<TaskFormContext | undefined>(undefined);

export const TaskFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<Task>({
    taskName: "",
    createdAt: new Date(),
    status: TaskStatus.todo,
    dueDate: null,
    timeEstimate: null,
    priority: TaskPriority.none,
    lastUpdated: new Date(),
    details: "",
    subtasks: [],
  });

  return (
    <TaskFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </TaskFormContext.Provider>
  );
};

export const useTaskFormContext = () => {
  const context = useContext(TaskFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a taskFormProvider");
  }
  return context;
};
