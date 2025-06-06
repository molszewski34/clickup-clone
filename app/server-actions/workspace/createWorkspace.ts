import { db } from "@/db/firebase/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Workspace } from "../types";

export const createWorkspace = async (
  name: Workspace["name"],
  description: Workspace["description"]
) => {
  try {
    const workspacesRef = collection(db, "workspace");
    const newWorkspace = await addDoc(workspacesRef, {
      name,
      description,
      createdAt: new Date(),
    });

    return { id: newWorkspace.id };
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
