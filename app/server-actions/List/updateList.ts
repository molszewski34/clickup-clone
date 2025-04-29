import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const updateList = async (
  workspaceId: string,
  listName: string,
  spaceId: string,
  isPrivate: boolean,
  listId: string
) => {
  try {
    const taskRef = doc(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists/${listId}`
    );

    await updateDoc(taskRef, {
      name: listName,
      isPrivate: isPrivate,
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp(),
    });

    console.log(`Zaktualizowano liste o id: ${listId}`);
  } catch (error) {
    console.error("Błąd podczas aktualizowania listy", error);
  }
};
