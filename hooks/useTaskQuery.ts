import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/app/server-actions/task/getTasks";

const tasksQueryKey = (userId: string, workspaceId: string, projectId: string) => [
  "tasks",
  userId,
  workspaceId,
  projectId,
];

export const useTasksQuery = (userId: string, workspaceId: string, projectId: string) => {
  console.log("here", userId, workspaceId, projectId);
  return useQuery({
    queryKey: tasksQueryKey(userId, workspaceId, projectId),
    queryFn: () => getTasks(userId, workspaceId, projectId),
    enabled: !!userId && !!workspaceId && !!projectId,
  });
};
