import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { Workspace } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const deleteWorkspace = async (workspaceId: Workspace["id"]) => {
  const workspaceRef = doc(db, `workspace/${workspaceId}`);
  const workspaceDoc = await getDoc(workspaceRef);

  try {
    if (!workspaceDoc.exists()) {
      console.error(
        `Error occured when deleting space. Could not find space with specified ID: ${workspaceId}`
      );
    } else {
      await deleteDoc(workspaceRef);
      console.log(`Space deleted successfully`);
    }
  } catch (error) {
    console.error(`Error occured when deleting space (ID: ${workspaceId}). `, error);
  }
};
