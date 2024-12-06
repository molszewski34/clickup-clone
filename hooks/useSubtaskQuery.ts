"use client";

import { useQuery } from "@tanstack/react-query";
import { useData } from "@/context/DataProvider/DataProvider";
import { getSubTasks } from "@/app/server-actions/subtasks/getSubtasks";

export const useSubTaskQuery = () => {
  const { userId, workspaceId, projectId, taskId } = useData();

  return useQuery({
    queryKey: ["subtasks", userId, workspaceId, projectId, taskId],
    queryFn: () => {
      if (!userId || !workspaceId || !projectId || !taskId) {
        return Promise.resolve([]);
      }
      return getSubTasks(userId, workspaceId, projectId, taskId);
    },
    enabled: !!userId && !!workspaceId && !!projectId && !!taskId,
  });
};
