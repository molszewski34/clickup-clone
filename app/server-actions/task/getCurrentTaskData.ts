import { db } from "@/db/firebase/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Task } from "../types";

export type TaskLocation = {
  workspaceId: string;
  spaceId: string;
  listId: string;
  taskId: string;
};

export const getCurrentTaskData = async (
  location: TaskLocation
): Promise<Task | null> => {
  try {
    const taskRef = doc(
      db,
      "workspace",
      location.workspaceId,
      "spaces",
      location.spaceId,
      "lists",
      location.listId,
      "tasks",
      location.taskId
    );
    console.log("Pobieranie taska z lokalizacji:", location);

    const taskSnap = await getDoc(taskRef);

    if (taskSnap.exists()) {
      return {
        id: taskSnap.id,
        ...taskSnap.data(),
      } as Task;
    }

    return null;
  } catch (error) {
    console.error("Błąd podczas pobierania taska:", error);
    return null;
  }
};
