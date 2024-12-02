import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const addTask = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  taskName: string,
  taskStatus: string,
  dueDate: Date | null,
  assignees: string,
  timeEstimate: string,
  priority: string,
  details: string
) => {
  try {
    const taskUUID = crypto.randomUUID();
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskUUID}`
    );

    await setDoc(taskRef, {
      id: taskUUID,
      workspaceId,
      projectId,
      name: taskName,
      taskStatus,
      dueDate,
      assignees,
      timeEstimate,
      priority,
      details,
    });

    console.log(`Dodano task "${taskName}" do projektu ${projectId}`);
  } catch (error) {
    console.error('Błąd podczas dodawania taska', error);
  }
};
