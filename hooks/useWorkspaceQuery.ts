import { getWorkspaces } from '@/app/server-actions/workspace/getWorkspaces';
import { useUser } from '@/context/DataProvider/UserDataProvider';
import { useQuery } from '@tanstack/react-query';

export const useWorkspaceQuery = () => {
  const { userId } = useUser();

  if (!userId) {
    return { data: [], error: 'User ID is not available' };
  }

  return useQuery({
    queryKey: ['workspaces', userId],
    queryFn: () => getWorkspaces(userId),
  });
};
