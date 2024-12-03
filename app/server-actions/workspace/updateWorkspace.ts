import { db } from '@/db/firebase/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Workspace } from '@/app/server-actions/types';

export const updateWorkspace = async (
  userId: string,
  selectedWorkspace: Workspace,
  selectedWorkspaceId: string
) => {
  try {
    const workspaceRef = doc(
      db,
      `users/${userId}/workspaces/${selectedWorkspaceId}`
    );
    await setDoc(workspaceRef, {
      id: selectedWorkspace.id,
      name: selectedWorkspace.name,
      createdAt: selectedWorkspace.createdAt,
      userId: userId,
      desc: selectedWorkspace.desc,
      icon: selectedWorkspace.icon,
      isPrivate: selectedWorkspace.isPrivate,
    });
    console.log('Workspace added successfully');
  } catch (error) {
    console.error('Error updating workspace', error);
    throw new Error('Error updating workspace ' + error);
  }
};
