import { addDoc, collection } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { Task } from "../types";

export const createTask = async (
  formData: Task,
  workspaceId: string,
  spaceId: string,
  listId: string
) => {
  try {
    const taskRef = collection(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists/${listId}/tasks`
    );

    await addDoc(taskRef, {
      ...formData,
    });

    console.log(`Dodano task "${formData.taskName}" do listy ${listId}`);
  } catch (error) {
    console.error("Błąd podczas dodawania taska", error);
  }
};
