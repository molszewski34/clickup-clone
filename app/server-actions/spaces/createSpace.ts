import { db } from "@/db/firebase/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Space } from "../types";

export const createSpace = async (
  name: Space["name"],
  description: Space["description"],
  isPrivate: Space["isPrivate"]
) => {
  try {
    const spacesRef = collection(db, "spaces");
    const newSpace = await addDoc(spacesRef, {
      name,
      description,
      isPrivate,
      createdAt: new Date(),
    });
    console.log("Space added successfully");
    return { id: newSpace.id };
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
