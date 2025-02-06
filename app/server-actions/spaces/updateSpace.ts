import { doc, updateDoc } from "firebase/firestore";
import { Space } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const updateSpace = async (
  id: Space["id"],
  name?: Space["name"],
  description?: Space["description"],
  isPrivate?: Space["isPrivate"]
) => {
  const spaceRef = doc(db, `spaces/${id}`);

  const newSpaceProperties = { name: name, description: description, isPrivate: isPrivate };
  const objectProperties: Record<string, string | boolean> = {};
  Object.entries(newSpaceProperties).forEach(([key, value]) => {
    if (value === undefined) return;
    objectProperties[key] = value;
  });

  try {
    await updateDoc(spaceRef, objectProperties);
  } catch (error) {
    console.log("Error occured when updating space", error);
  }
};
