import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';
import { Task } from '../types';

export const addNewTask = async (
  formData: Task,
  userId: string,
  workspaceId: string,
  projectId: string
) => {
  try {
    const taskUUID = formData.id || crypto.randomUUID();
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskUUID}`
    );

    await setDoc(taskRef, {
      ...formData,
      userId,
      id: taskUUID,
      workspaceId,
      projectId,
    });

    console.log(`Dodano task "${formData.taskName}" do projektu ${projectId}`);
  } catch (error) {
    console.error('Błąd podczas dodawania taska', error);
  }
};
