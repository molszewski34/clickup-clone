import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProject } from '@/app/server-actions/project/addNewProject';
import { useData } from '@/context/DataProvider/DataProvider';

interface UseCreateProjectProps {
  toggleModal: (modal: 'none' | 'menuWorkspaceList' | 'createList') => void;
}

export const useCreateProject = ({ toggleModal }: UseCreateProjectProps) => {
  const { workspaceId } = useData();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      projectName,
      isPrivate,
    }: {
      projectName: string;
      isPrivate: boolean;
      userId: string;
    }) => {
      return await addProject(userId, workspaceId, projectName, isPrivate);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      console.log('Project created successfully!');
      toggleModal('none');
    },
    onError: (error: unknown) => {
      console.error('Error creating project:', error);
    },
  });
};
