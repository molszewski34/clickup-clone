import { useUser } from "@/context/DataProvider/UserDataProvider";

import { useUsersGetUserById } from "./useUsersGetUserById";

function useGetCurrentWorkspace() {
  const { userId } = useUser();

  const { data: userData } = useUsersGetUserById(userId ?? "");

  const workspaceId = userData?.activeWorkspace;

  return { workspaceId };
}

export default useGetCurrentWorkspace;
