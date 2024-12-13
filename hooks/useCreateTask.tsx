import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Task } from '@/app/server-actions/types';
import { addNewTask } from '@/app/server-actions/task/addNewTask';

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      formData,
      userId,
      workspaceId,
      projectId,
    }: {
      formData: Task;
      userId: string;
      workspaceId: string;
      projectId: string;
    }) => {
      await addNewTask(formData, userId, workspaceId, projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      console.log('Task created successfully!');
    },
    onError: (error: unknown) => {
      console.error('Error creating task:', error);
    },
  });
};
