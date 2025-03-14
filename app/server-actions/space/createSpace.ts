import { db } from "@/db/firebase/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Space, Workspace } from "../types";

export const createSpace = async (formData: Space, workspaceId: Workspace) => {
  try {
    const spacesRef = collection(db, `workspace/${workspaceId}/spaces`);
    const newSpace = await addDoc(spacesRef, {
      name: formData.name,
      isPrivate: formData.isPrivate,
      desc: formData.description,
      icon: formData.icon,
    });
    console.log("Space added successfully");
    return { id: newSpace.id };
  } catch (error) {
    console.error("Error adding new space:", error);
  }
};
