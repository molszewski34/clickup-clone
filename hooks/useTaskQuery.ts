import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/app/server-actions/task/getTasks";

export const useTasksQuery = (
  workspaceId: string,
  spaceId: string,
  listId: string
) => {
  return useQuery({
    queryKey: ["tasks", workspaceId, spaceId, listId],
    queryFn: () => getTasks(workspaceId, spaceId, listId),
    enabled: !!workspaceId && !!spaceId,
  });
};
