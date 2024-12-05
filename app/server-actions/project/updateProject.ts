import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const addProject = async (
  userId: string,
  workspaceId: string,
  selectedProjectId: string,
  projectName: string = 'List',
  isPrivate: boolean
) => {
  try {
    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${selectedProjectId}`
    );

    await setDoc(projectRef, {
      name: projectName,
      id: selectedProjectId,
      isPrivate: isPrivate,
    });

    console.log(`Dodano projekt "${projectName}" do workspace ${workspaceId}`);
  } catch (error) {
    console.error('Błąd podczas dodawania projektu', error);
  }
};
