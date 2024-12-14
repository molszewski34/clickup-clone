import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';
import { useData } from '@/context/DataProvider/DataProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';

const deleteProject = async (
  userId: string,
  workspaceId: string,
  projectId: string
): Promise<void> => {
  const projectRef = doc(
    db,
    `users/${userId}/workspaces/${workspaceId}/projects/${projectId}`
  );
  await deleteDoc(projectRef);
};

const DeleteProjectButton: React.FC = () => {
  const queryClient = useQueryClient();

  const { workspaceId, projectId } = useData();
  const { userId } = useUser();

  const mutation = useMutation<void, Error>({
    mutationFn: () => deleteProject(userId, workspaceId, projectId),
    onSuccess: () => {
      console.log(
        `Deleted project "${projectId}" from workspace "${workspaceId}".`
      );

      queryClient.invalidateQueries({
        queryKey: ['projects', userId, workspaceId],
      });
    },
    onError: (error) => {
      console.error('Error deleting project:', error);
    },
  });

  const isLoading = mutation.status === 'pending';

  return (
    <button
      className="flex-1 px-4 py-2 bg-red-600 font-sans text-sm font-medium text-white rounded-lg hover:bg-red-800"
      onClick={() => mutation.mutate()}
      disabled={isLoading}
    >
      Delete
    </button>
  );
};

export default DeleteProjectButton;
