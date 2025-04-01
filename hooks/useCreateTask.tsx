import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Task } from "@/app/server-actions/types";
import { createTask } from "@/app/server-actions/task/createTask";

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      formData,

      workspaceId,
      spaceId,
      listId,
    }: {
      formData: Task;
      userId: string;
      workspaceId: string;
      spaceId: string;
      listId: string;
    }) => {
      await createTask(formData, workspaceId, spaceId, listId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log("Task created successfully!");
    },
    onError: (error: unknown) => {
      console.error("Error creating task:", error);
    },
  });
};
