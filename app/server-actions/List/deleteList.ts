import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const deleteList = async (
  workspaceId: string,
  listId: string,
  spaceId: string
) => {
  try {
    const projectRef = doc(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists/${listId}`
    );

    await deleteDoc(projectRef);

    console.log(
      `Usunięto projekt o ID: "${listId}" z workspace ${workspaceId}`
    );
  } catch (error) {
    console.error("Błąd podczas usuwania projektu", error);
  }
};
