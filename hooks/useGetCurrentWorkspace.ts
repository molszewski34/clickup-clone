import { useUser } from "@/context/DataProvider/UserDataProvider";

import { useUsersGetUserById } from "./useUsersGetUserById";

function useGetCurrentWorkspace() {
  // const { userId } = useGetCurrentUser();
  const { userId } = useUser();
  console.log("[useGetCurrentWorkspace] userId:", userId);

  const {
    data: userData,
    isLoading,
    error,
  } = useUsersGetUserById(userId ?? "");
  console.log("[useGetCurrentWorkspace] userData:", userData);
  console.log("[useGetCurrentWorkspace] isLoading:", isLoading);
  console.log("[useGetCurrentWorkspace] error:", error);

  const workspaceId = userData?.activeWorkspace;
  console.log("[useGetCurrentWorkspace] workspaceId:", workspaceId);

  return { workspaceId };
}

export default useGetCurrentWorkspace;
