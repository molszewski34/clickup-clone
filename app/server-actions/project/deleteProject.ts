import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const deleteProject = async (
  userId: string,
  workspaceId: string,
  selectedProjectId: string
) => {
  try {
    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${selectedProjectId}`
    );

    await deleteDoc(projectRef);
  } catch (error) {
    console.error("Błąd podczas usuwania projektu", error);
  }
};
