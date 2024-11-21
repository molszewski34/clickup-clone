import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const createDefaultWorkspace = async (userId: string) => {
  const workspaceRef = doc(db, `users/${userId}/workspaces/workspace1`);

  try {
    const workspaceDoc = await getDoc(workspaceRef);
    if (workspaceDoc.exists()) {
      console.log('Workspace already exists.');
      return;
    }

    await setDoc(workspaceRef, {
      name: 'Workspace',
    });

    const projectRef = doc(
      db,
      `users/${userId}/workspaces/workspace/projects/project`
    );
    await setDoc(projectRef, {
      name: 'Project',
    });

    const taskRef = doc(
      db,
      `users/${userId}/workspaces/workspace/projects/project/tasks/task`
    );
    await setDoc(taskRef, {
      name: 'Task 1',
    });

    console.log('Stworzono domyślny workspace');
  } catch (error) {
    console.error('Błąd podczas tworzenia workspace', error);
  }
};
