"use client";

import { getSpacesForUser } from "@/app/server-actions/user2space/getSpacesForUser";
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
