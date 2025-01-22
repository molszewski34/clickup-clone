import { useData } from "@/context/DataProvider/DataProvider";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "@/app/server-actions/task/updateTask";
import { useUser } from "@/context/DataProvider/UserDataProvider";

export const useUpdateTask = () => {
  const { formData } = useTaskFormContext();
  const { projectId, workspaceId } = useData();
  const { userId } = useUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await updateTask(formData, userId, workspaceId, projectId, formData.id);
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
