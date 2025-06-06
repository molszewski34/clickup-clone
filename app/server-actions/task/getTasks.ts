import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { Task } from "../types";

export const getTasks = async (
  workspaceId: string,
  spaceId: string,
  listId: string
) => {
  try {
    const projectsRef = collection(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists/${listId}/tasks`
    );
    const querySnapshot = await getDocs(projectsRef);

    const tasks: Task[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Task, "id">),
    }));

    return tasks;
  } catch (error) {
    console.error("Błąd podczas pobierania tasków", error);
    return [];
  }
};
