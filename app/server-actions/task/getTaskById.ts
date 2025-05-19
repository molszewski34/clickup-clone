import { doc, getDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { Task } from "../types";

export const getTaskById = async (
  workspaceId: string,
  spaceId: string,
  listId: string,
  taskId: string
): Promise<Task | undefined> => {
  try {
    const taskRef = doc(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists/${listId}/tasks/${taskId}`
    );

    const taskSnap = await getDoc(taskRef);

    if (taskSnap.exists()) {
      return {
        id: taskSnap.id,
        ...(taskSnap.data() as Omit<Task, "id">),
      };
    } else {
      console.warn(`Task with id ${taskId} does not exist`);
      return undefined;
    }
  } catch (error) {
    console.error("Błąd podczas pobierania taska", error);
    return undefined;
  }
};
