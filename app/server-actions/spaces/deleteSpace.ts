import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { Space } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const deleteSpace = async (spaceId: Space["id"]) => {
  const spaceRef = doc(db, `spaces/${spaceId}`);
  const spaceDoc = await getDoc(spaceRef);

  try {
    if (!spaceDoc.exists()) {
      console.error(
        `Error occured when deleting space. Could not find space with specified ID: ${spaceId}`
      );
    } else {
      await deleteDoc(spaceRef);
      console.log(`Space deleted successfully`);
    }
  } catch (error) {
    console.error(`Error occured when deleting space (ID: ${spaceId}). `, error);
  }
};
