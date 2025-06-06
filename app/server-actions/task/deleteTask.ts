import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const deleteTask = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  selectedTaskId: string
) => {
  try {
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${selectedTaskId}`
    );

    await deleteDoc(taskRef);
  } catch (error) {
    console.error("Błąd podczas usuwania taska", error);
  }
};
