import { doc, setDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const addSubTask = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  taskId: string,
  subTaskName: string,
  subTaskStatus: string,
  dueDate: Date | null,
  assignees: string,
  timeEstimate: string,
  priority: string,
  details: string
) => {
  try {
    const subTaskUUID = crypto.randomUUID();
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskId}/subtasks/${subTaskUUID}`
    );

    await setDoc(taskRef, {
      id: subTaskUUID,
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
  } catch (error) {
    console.error("Błąd podczas dodawania taska", error);
  }
};
