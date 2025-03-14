import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const updateUserKey = async (oldId: string, newId: string) => {
  try {
    if (!newId) {
      throw new Error("User is not authenticated");
    }
    const oldUserRef = doc(db, "users", oldId);
    const newUserRef = doc(db, "users", newId);

    const oldUserDoc = await getDoc(oldUserRef);
    if (!oldUserDoc.exists()) {
      return { success: false, message: "Old user data not found" };
    }

    await setDoc(newUserRef, oldUserDoc.data());
    await deleteDoc(oldUserRef);

    return { success: true, message: "User ID updated successfully" };
  } catch (error) {
    console.error("Error updating user ID in Firestore:", error);
    return { success: false, message: "Internal server error" };
  }
};
