import { useData } from "@/context/DataProvider/DataProvider";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "@/app/server-actions/task/updateTask";
import useGetCurrentWorkspace from "./useGetCurrentWorkspace";

export const useUpdateTask = () => {
  const { formData } = useTaskFormContext();
  const { listId, spaceId } = useData();
  const { workspaceId } = useGetCurrentWorkspace();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await updateTask(
        formData,
        workspaceId as string,
        spaceId,
        listId,
        formData.id
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log("Task updated successfully!");
    },
    onError: (error) => {
      console.error("Error when updating the task: ", error);
    },
  });
};
