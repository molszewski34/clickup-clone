import { doc, updateDoc } from "firebase/firestore";
import { Workspace } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const updateWorkspace = async (
  workspaceId: Workspace["id"],
  name?: Workspace["name"],
  description?: Workspace["description"]
) => {
  const workspaceRef = doc(db, `workspace/${workspaceId}`);

  const newWorkspaceProperties = { name: name, description: description };
  const objectProperties: Record<string, string | boolean> = {};
  Object.entries(newWorkspaceProperties).forEach(([key, value]) => {
    if (value === undefined) return;
    objectProperties[key] = value;
  });

  try {
    await updateDoc(workspaceRef, objectProperties);
  } catch (error) {
    console.log("Error occured when updating space", error);
  }
};
