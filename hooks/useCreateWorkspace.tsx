import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewWorkspace } from '@/app/server-actions/workspace/createNewWorkspace';
import { Workspace } from '@/app/server-actions/types';

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      formData,
      userId,
    }: {
      formData: Workspace;
      userId: string;
    }) => {
      await createNewWorkspace(formData, userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
      console.log('Workspace created successfully!');
    },
    onError: (error: unknown) => {
      console.error('Error creating workspace:', error);
    },
  });
};
