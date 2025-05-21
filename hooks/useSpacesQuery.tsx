import { getSpaces } from "@/app/server-actions/space/getSpaces";
import { useQuery } from "@tanstack/react-query";
import { useUsersGetUserById } from "./useUsersGetUserById";
import useGetCurrentUser from "./useGetCurrentUser";

function useSpacesQuery() {
  const { userId } = useGetCurrentUser();

  const { data: userData, isLoading: isUserLoading } = useUsersGetUserById(
    userId ?? ""
  );

  const workspaceId = userData?.activeWorkspace;

  return useQuery({
    queryKey: ["spaces", workspaceId],
    queryFn: () => {
      if (!workspaceId) throw new Error("Workspace is undefined");
      return getSpaces(workspaceId);
    },
    enabled: !!workspaceId && !isUserLoading,
  });
}

export default useSpacesQuery;
