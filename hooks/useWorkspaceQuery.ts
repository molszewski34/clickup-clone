"use client";

import { getWorkspaces } from "@/app/server-actions/workspace-old/getWorkspaces";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useQuery } from "@tanstack/react-query";

export const useWorkspaceQuery = () => {
  const { userId } = useUser();

  return useQuery({
    queryKey: ["spaces", userId],
    queryFn: () => {
      if (!userId) {
        return Promise.resolve([]);
      }

      return getSpacesForUser(userId);
    },
    enabled: !!userId,
  });
};
