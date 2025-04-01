import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/app/server-actions/task/getTasks";

const tasksQueryKey = (
  workspaceId: string,
  spaceId: string,
  listId: string
) => [workspaceId, spaceId, listId];

export const useTasksQuery = (
  workspaceId: string,
  spaceId: string,
  listId: string
) => {
  return useQuery({
    queryKey: tasksQueryKey(workspaceId, spaceId, listId),
    queryFn: () => getTasks(workspaceId, spaceId, listId),
    enabled: !!workspaceId && !!spaceId,
  });
};
