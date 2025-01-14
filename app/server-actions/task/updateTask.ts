import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { Task } from "../types";

export const updateTask = async (
  task: Task,
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

    await updateDoc(taskRef, {
      assignees: task.assignees,
      status: task.status,
      priority: task.priority,
      taskName: task.taskName,
    });

    console.log(`Zaktualizowano task o id: ${selectedTaskId}`);
  } catch (error) {
    console.error("Błąd podczas aktualizowania taska", error);
  }
};
