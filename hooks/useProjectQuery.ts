import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/app/server-actions/project/getProjects";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";

export const useProjectQuery = () => {
  const { workspaceId } = useData();
  const { userId } = useUser();

  return useQuery({
    queryKey: ["projects", userId, workspaceId],
    queryFn: () => {
      if (!userId || !workspaceId) {
        return Promise.resolve([]);
      }
      return getProjects(userId, workspaceId);
    },
    enabled: !!userId && !!workspaceId,
  });
};
