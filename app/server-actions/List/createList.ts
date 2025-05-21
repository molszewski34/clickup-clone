import { db } from "@/db/firebase/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const createList = async (
  workspaceId: string,
  listName: string,
  spaceId: string,
  isPrivate: boolean
) => {
  try {
    const listRef = collection(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists`
    );
    const newList = await addDoc(listRef, {
      name: listName,
      isPrivate: isPrivate,
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp(),
    });
    console.log("List was added successfully");
    return { id: newList.id };
  } catch (error) {
    console.error("Error adding new space:", error);
  }
};
