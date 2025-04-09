import { Task } from "@/app/server-actions/types";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { Timestamp } from "firebase/firestore";

export const useUpdateTaskForm = () => {
  const { formData, setFormData } = useTaskFormContext();

  type PropertyToChange = "taskName" | "assignees" | "priority" | "status";

  const updateTaskForm = <K extends PropertyToChange>(
    property: K,
    value: Task[K]
  ) => {
    const updatedTask = structuredClone(formData);
    updatedTask[property] = value;
    updatedTask.lastUpdated = Timestamp.now();
    setFormData(updatedTask);
  };

  return {
    updateTaskForm,
  };
};
