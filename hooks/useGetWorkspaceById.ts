import { Workspace } from "@/app/server-actions/types";
import { getWorkspaceById } from "@/app/server-actions/workspace/getWorkspaceById";
import { useQuery } from "@tanstack/react-query";

export const useGetWorkspaceById = (workspaceId: Workspace["id"]) => {
  return useQuery({
    queryKey: ["workspace"],
    queryFn: () => getWorkspaceById(workspaceId),
  });
};
