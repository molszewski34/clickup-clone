import { db } from "@/db/firebase/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { User } from "../types";

export const deleteUser = async (userId: User["userId"]) => {
  try {
    const userRef = doc(db, `users/${userId}`);

    await deleteDoc(userRef);

    console.log(`User został usunięty`);
  } catch (error) {
    console.error("Error deleting workspace", error);
    throw new Error("Error deleting workspace: " + error);
  }
};
