import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const updateSubTask = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  taskId: string,
  selectedSubTaskId: string,
  subTaskName: string,
  subTaskStatus: string,
  dueDate: Date | null,
  assignees: string,
  timeEstimate: string,
  priority: string,
  details: string
) => {
  try {
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskId}/subtasks/${selectedSubTaskId}`
    );

    await updateDoc(taskRef, {
      id: selectedSubTaskId,
      workspaceId,
      projectId,
      taskId,
      subTaskName,
      subTaskStatus,
      dueDate,
      assignees,
      timeEstimate,
      priority,
      details,
    });

    console.log(`Zaktualizowano "${subTaskName}" ${projectId}`);
  } catch (error) {
    console.error('Błąd podczas aktualizowania taska', error);
  }
};
