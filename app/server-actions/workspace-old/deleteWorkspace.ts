import { db } from '@/db/firebase/lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteWorkspace = async (
  userId: string,
  selectedWorkspaceId: string
) => {
  try {
    const workspaceRef = doc(
      db,
      `users/${userId}/workspaces/${selectedWorkspaceId}`
    );

    await deleteDoc(workspaceRef);

    console.log(`Workspace o ID: "${selectedWorkspaceId}" został usunięty`);
  } catch (error) {
    console.error('Error deleting workspace', error);
    throw new Error('Error deleting workspace: ' + error);
  }
};
