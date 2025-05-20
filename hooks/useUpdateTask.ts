import { useData } from "@/context/DataProvider/DataProvider";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "@/app/server-actions/task/updateTask";
import useGetCurrentWorkspace from "./useGetCurrentWorkspace";
import { Task } from "@/app/server-actions/types";

export const useUpdateTask = () => {
  const { formData } = useTaskFormContext();
  const { listId, spaceId } = useData();
  const { workspaceId } = useGetCurrentWorkspace();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await updateTask(
        formData as Task & { id: string },
        workspaceId as string,
        spaceId,
        listId,
        (formData as { id: string }).id
      );
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["task", formData.id] });

      const previousTask = queryClient.getQueryData<Task>([
        "task",
        formData.id,
      ]);

      queryClient.setQueryData<Task>(["task", formData.id], (old) => {
        return old ? { ...old, ...formData } : (formData as Task);
      });

      return { previousTask };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log("Task updated successfully!");
    },

    onError: (_err, _updatedTask, context) => {
      if (context?.previousTask) {
        queryClient.setQueryData(["task", formData.id], context.previousTask);
      }
      console.error("Error when updating the task");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["task", formData.id] });
    },
  });
};
