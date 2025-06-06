import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const getSubTasks = async (
  userId: string,
  workspaceId: string,
  projectId: string,
  taskId: string
) => {
  try {
    const tasksRef = collection(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskId}/subtasks/`
    );
    const querySnapshot = await getDocs(tasksRef);

    const subTasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return subTasks;
  } catch (error) {
    console.error("Błąd podczas pobierania tasków", error);
    return [];
  }
};
