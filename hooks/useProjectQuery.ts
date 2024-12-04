'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/server-actions/project/getProjects';
import { useData } from '@/context/DataProvider/DataProvider';

export const useProjectQuery = () => {
  const { userId, workspaceId } = useData();

  if (!userId) {
    return { data: [], error: 'User ID is not available' };
  }

  return useQuery({
    queryKey: ['projects', userId, workspaceId],
    queryFn: () => getProjects(userId, workspaceId),
  });
};
