import useGetCurrentUser from "./useGetCurrentUser";
import { useUsersGetUserById } from "./useUsersGetUserById";

function useGetCurrentWorkspace() {
  const { userId } = useGetCurrentUser();

  const { data: userData } = useUsersGetUserById(userId ?? "");

  const workspaceId = userData?.activeWorkspace;

  return { workspaceId };
}

export default useGetCurrentWorkspace;
