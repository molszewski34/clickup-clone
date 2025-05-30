import { getTasks } from "@/app/server-actions/task/getTasks";
import { Task } from "@/app/server-actions/types";
import { getUserAssociations } from "@/app/server-actions/user/getUserAssociations";

import { useQuery } from "@tanstack/react-query";

export const useGetTaskAssignedToUser = (
  userId: string,
  workspaceId: string
) => {
  return useQuery<Task[]>({
    queryKey: ["user2task", userId, workspaceId],
    queryFn: async () => {
      if (!userId) throw new Error("userId is required");

      const userAssociations = await getUserAssociations(userId);
      if (!userAssociations || userAssociations.length === 0) return [];

      const grouped = userAssociations.reduce(
        (acc, assoc) => {
          const key = `${assoc.spaceId}|${assoc.listId}`;
          if (!acc[key]) acc[key] = [];
          acc[key].push(assoc.taskId);
          return acc;
        },
        {} as Record<string, string[]>
      );

      const allAssociatedTasks: Task[] = [];

      for (const key in grouped) {
        const [spaceId, listId] = key.split("|");
        const taskIds = grouped[key];

        const tasks = await getTasks(workspaceId, spaceId, listId);
        const filtered = tasks.filter((task) =>
          taskIds.includes(task.id as string)
        );

        allAssociatedTasks.push(...filtered);
      }

      return allAssociatedTasks;
    },
    enabled: !!userId && !!workspaceId,
  });
};
