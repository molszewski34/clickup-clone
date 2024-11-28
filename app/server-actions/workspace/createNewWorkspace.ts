import { db } from '@/db/firebase/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Workspace } from '@/app/server-actions/types';

//* *Funkcja tworzy nowy workspace i dodaje domyślny nowy projekt o nazwie List.

export const createNewWorkspace = async (
  newWorkspace: Workspace,
  userId: string
) => {
  try {
    const workspaceRef = doc(
      db,
      `users/${userId}/workspaces/${newWorkspace.id}`
    );
    await setDoc(workspaceRef, {
      name: newWorkspace.name,
      createdAt: newWorkspace.createdAt,
      userId: userId,
      desc: newWorkspace.desc,
      icon: newWorkspace.icon,
      isPrivate: newWorkspace.isPrivate,
    });
    console.log('Workspace added successfully');

    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${newWorkspace.id}/projects/list`
    );
    await setDoc(projectRef, {
      id: crypto.randomUUID(),
      name: 'List',
      isPrivate: false,
    });
    console.log('Default project "List" added successfully');
  } catch (error) {
    console.error('Error adding workspace or project:', error);
    throw new Error('Error adding workspace or project: ' + error);
  }
};
