import { User, Workspace } from "@/app/server-actions/types";
import { getUsersForWorkspace } from "@/app/server-actions/workspace/getUsersForWorkspace";
import { getWorkspacesForUser } from "@/app/server-actions/workspace/getWorkspacesForUser";
import { useQuery } from "@tanstack/react-query";

export interface WorkspaceWithMembers extends Workspace {
  members: User[];
}

export const useGetWorkspacesForUser = (userId: User["id"]) => {
  const getWorkspacesWithNumberOfMembers = async () => {
    const userWorkspaces = (await getWorkspacesForUser(userId)) as
      | WorkspaceWithMembers[]
      | undefined;
    if (userWorkspaces) {
      const userWorkspacesPromises = userWorkspaces.map(async (singleWorkspace) => {
        const singleWorkspaceUsers = await getUsersForWorkspace(singleWorkspace.id);
        if (singleWorkspaceUsers !== undefined) {
          singleWorkspace["members"] = singleWorkspaceUsers;
          return singleWorkspace;
        } else {
          console.error("Could not find workspace users");
        }
      });
      const workspacesWithMembers = (await Promise.all(userWorkspacesPromises)).filter(
        (singleWorkspaceWithMembers) => singleWorkspaceWithMembers !== undefined
      );
      return workspacesWithMembers;
    }
  };

  return useQuery({
    queryKey: [],
    queryFn: () => getWorkspacesWithNumberOfMembers(),
    enabled: !!userId,
  });
};
