import { getTasks } from "@/app/server-actions/task/getTasks";
import { Task } from "@/app/server-actions/types";
import { getUserAssociations } from "@/app/server-actions/user/getUserAssociations";

import { useQuery } from "@tanstack/react-query";

export const useGetTaskAssignedToUser = (
  userId: string,
  workspaceId: string,
  spaceId: string,
  listId: string
) => {
  return useQuery<Task[]>({
    queryKey: ["tasksAssignedToUser", userId, workspaceId, spaceId, listId],
    queryFn: async () => {
      if (!userId) throw new Error("userId is required");

      const userAssociations = await getUserAssociations(userId);
      if (!userAssociations || userAssociations.length === 0) return [];

      const allTasks = await getTasks(workspaceId, spaceId, listId);

      const associatedTaskIds = userAssociations.map((a) => a.taskId);
      return allTasks.filter((task) =>
        associatedTaskIds.includes(task.id as string)
      );
    },
    enabled: !!userId && !!workspaceId && !!spaceId && !!listId,
  });
};
