'use client';

import { useQuery } from '@tanstack/react-query';
import { useData } from '@/context/DataProvider/DataProvider';
import { getWorkspaces } from '@/app/server-actions/workspace/getWorkspaces';

export const useWorkspaceQuery = () => {
  const { userId } = useData();

  if (!userId) {
    return { data: [], error: 'User ID is not available' };
  }

  return useQuery({
    queryKey: ['projects', userId],
    queryFn: () => getWorkspaces(userId),
  });
};
