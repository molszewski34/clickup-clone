"use client";

import { useQuery } from "@tanstack/react-query";
import { useData } from "@/context/DataProvider/DataProvider";
import { getTasks } from "@/app/server-actions/task/getTasks";

export const useTaskQuery = () => {
  const { userId, workspaceId, projectId } = useData();

  return useQuery({
    queryKey: ["tasks", userId, workspaceId, projectId],
    queryFn: () => {
      if (!userId || !workspaceId || !projectId) {
        return Promise.resolve([]);
      }
      return getTasks(userId, workspaceId, projectId);
    },
    enabled: !!userId && !!workspaceId && !!projectId,
  });
};
