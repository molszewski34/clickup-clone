'use client';

import { useQuery } from '@tanstack/react-query';
import { useData } from '@/context/DataProvider/DataProvider';
import { getTasks } from '@/app/server-actions/task/getTasks';

export const useTaskQuery = () => {
  const { userId, workspaceId, projectId } = useData();

  if (!userId) {
    return { data: [], error: 'User ID is not available' };
  }

  return useQuery({
    queryKey: ['projects', userId, workspaceId, projectId],
    queryFn: () => getTasks(userId, workspaceId, projectId),
  });
};
