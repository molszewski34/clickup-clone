import { doc, setDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const addProject = async (
  userId: string,
  workspaceId: string,
  projectName: string = "List",
  isPrivate: boolean
): Promise<{ id: string }> => {
  try {
    const projectUUID = crypto.randomUUID();
    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects/${projectUUID}`
    );

    await setDoc(projectRef, {
      name: projectName,
      id: projectUUID,
      isPrivate: isPrivate,
    });

    console.log(`Dodano projekt "${projectName}" do workspace ${workspaceId}`);

    // Return the project ID after successful creation
    return { id: projectUUID };
  } catch (error) {
    console.error("Błąd podczas dodawania projektu", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
};
