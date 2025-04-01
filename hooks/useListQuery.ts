import { useQuery } from "@tanstack/react-query";
import { useData } from "@/context/DataProvider/DataProvider";

import { useUsersGetUserById } from "./useUsersGetUserById";
import useGetCurrentUser from "./useGetCurrentUser";
import { getLists } from "@/app/server-actions/List/getLists";

export const useListQuery = () => {
  const { spaceId } = useData();
  const { userId } = useGetCurrentUser();

  const { data: userData, isLoading: isUserLoading } = useUsersGetUserById(
    userId ?? ""
  );

  const workspaceId = userData?.activeWorkspace;

  return useQuery({
    queryKey: ["lists", spaceId, workspaceId],
    queryFn: () => {
      if (!spaceId || !workspaceId) {
        return Promise.resolve([]);
      }
      return getLists(workspaceId, spaceId);
    },
    enabled: !!spaceId && !!workspaceId && !isUserLoading,
  });
};
