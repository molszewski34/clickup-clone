import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { Task } from "../types";

export const updateTask = async (
  task: Task,

  workspaceId: string,
  spaceId: string,
  listId: string,
  selectedTaskId: string
) => {
  try {
    const taskRef = doc(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists/${listId}/tasks/${selectedTaskId}`
    );

    await updateDoc(taskRef, {
      status: task.status,
      priority: task.priority,
      taskName: task.taskName,
    });

    console.log(`Zaktualizowano task o id: ${selectedTaskId}`);
  } catch (error) {
    console.error("Błąd podczas aktualizowania taska", error);
  }
};
