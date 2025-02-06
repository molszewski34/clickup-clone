import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { User } from "../types";

export const updateUser = async (
  userId: string,
  userLastActive?: User["lastActive"],
  userFullName?: User["signUpFullName"]
) => {
  try {
    const userRef = doc(db, `users/${userId}`);

    if (userFullName) {
      await updateDoc(userRef, {
        signUpFullName: userFullName,
      });
    }
    if (userLastActive) {
      await updateDoc(userRef, {
        lastActive: userLastActive,
      });
    }
  } catch (error) {
    console.error("Błąd podczas aktualizowania użytkownika", error);
  }
};
