import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const deleteSubTask = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  taskId: string,
  selectedSubTaskId: string
) => {
  try {
    const subTaskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskId}/subtasks/${selectedSubTaskId}`
    );

    await deleteDoc(subTaskRef);

    console.log(`Usunięto subtask: ${selectedSubTaskId}`);
  } catch (error) {
    console.error('Błąd podczas usuwania subtaska', error);
  }
};
