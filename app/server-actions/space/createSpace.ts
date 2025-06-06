import { db } from "@/db/firebase/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { NewDefaultSpace } from "../types";

export const createSpace = async (
  formData: NewDefaultSpace,
  workspaceId: string
) => {
  try {
    const spacesRef = collection(db, `workspace/${workspaceId}/spaces`);
    const newSpace = await addDoc(spacesRef, {
      name: formData.name,
      createdAt: serverTimestamp(),
      isPrivate: formData.isPrivate,
      desc: formData.desc,
      icon: formData.icon,
    });

    return { id: newSpace.id };
  } catch (error) {
    console.error("Error adding new space:", error);
  }
};
