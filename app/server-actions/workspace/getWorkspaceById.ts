import { doc, getDoc } from "firebase/firestore";
import { Workspace } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const getWorkspaceById = async (workspaceId: Workspace["id"]) => {
  const workspaceRef = doc(db, `workspace/${workspaceId}`);
  try {
    const workspaceDoc = await getDoc(workspaceRef);
    if (!workspaceDoc.data()) {
      console.error("Workspace not found");
      return;
    }
    console.log(workspaceDoc.data());
    return workspaceDoc.data() as Workspace;
  } catch (error) {
    console.error("Error occured when fetching space", error);
  }
};
