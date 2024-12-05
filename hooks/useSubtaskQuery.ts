'use client';

import { useQuery } from '@tanstack/react-query';
import { useData } from '@/context/DataProvider/DataProvider';
import { getSubTasks } from '@/app/server-actions/subtasks/getSubtasks';

export const useSubTaskQuery = () => {
  const { userId, workspaceId, projectId, taskId } = useData();

  if (!userId) {
    return { data: [], error: 'User ID is not available' };
  }

  return useQuery({
    queryKey: ['projects', userId, workspaceId, projectId],
    queryFn: () => getSubTasks(userId, workspaceId, projectId, taskId),
  });
};
