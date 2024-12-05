import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/server-actions/project/getProjects';
import { useData } from '@/context/DataProvider/DataProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';

export const useProjectQuery = () => {
  const { workspaceId } = useData();
  const { userId } = useUser();

  if (!userId) {
    return { data: [], error: 'User ID is not available' };
  }

  return useQuery({
    queryKey: ['projects', userId, workspaceId],
    queryFn: () => getProjects(userId, workspaceId),
  });
};
