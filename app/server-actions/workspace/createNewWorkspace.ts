import { db } from '@/db/firebase/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Workspace } from '../types';

export const createNewWorkspace = async (
  formData: Workspace,
  userId: string
) => {
  try {
    const workspaceRef = doc(db, `users/${userId}/workspaces/${formData.id}`);
    await setDoc(workspaceRef, {
      name: formData.name,
      createdAt: formData.createdAt,
      userId: userId,
      desc: formData.desc,
      icon: formData.icon,
      isPrivate: formData.isPrivate,
    });

    const projectUUID = crypto.randomUUID();
    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${formData.id}/projects/${projectUUID}`
    );

    await setDoc(projectRef, {
      name: 'List',
      id: projectUUID,
      isPrivate: false,
    });
    console.log('Default project "List" added successfully');
  } catch (error) {
    console.error('Error adding workspace or project:', error);
    throw new Error('Error adding workspace or project: ' + error);
  }
};
