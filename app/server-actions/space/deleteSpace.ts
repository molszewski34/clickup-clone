import { db } from "@/db/firebase/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteSpace = async (workspaceId: string, spaceId: string) => {
  try {
    const spaceRef = doc(db, `workspace/${workspaceId}/spaces/${spaceId}`);
    await deleteDoc(spaceRef);
  } catch (error) {
    console.error("Error deleting space", error);
    throw new Error("Error deleting space: " + error);
  }
};
