import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const addTask = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  taskName: string,
  selectedTaskId: string,
  taskStatus: string,
  dueDate: Date | null,
  assignees: string,
  timeEstimate: string,
  priority: string,
  details: string
) => {
  try {
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${selectedTaskId}`
    );

    await setDoc(taskRef, {
      id: selectedTaskId,
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

    console.log(`Zaktualizowano task o id: ${selectedTaskId}`);
  } catch (error) {
    console.error('Błąd podczas aktualizowania taska', error);
  }
};
