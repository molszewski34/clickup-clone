import { db } from "@/db/firebase/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "../types";

export const getUserById = async (userId: string) => {
  try {
    const userRef = doc(db, `users/${userId}`);
    const userData = await getDoc(userRef);
    if (!userData) {
      console.error("Error! User not found");
      return;
    }
    return { id: userData.id, ...userData.data() } as User;
  } catch (error) {
    console.error("Error occured when accessing user details", error);
    return;
  }
};
