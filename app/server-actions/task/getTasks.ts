import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { Task } from "../types";

export const getTasks = async (userId: string, workspaceId: string, projectId: string) => {
  try {
    const projectsRef = collection(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks`
    );
    const querySnapshot = await getDocs(projectsRef);

    const tasks: Task[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Task, "id">),
    }));

    console.log("Pobrano taski:", tasks);
    return tasks;
  } catch (error) {
    console.error("Błąd podczas pobierania tasków", error);
    return [];
  }
};
