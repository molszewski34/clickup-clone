import { db } from "@/db/firebase/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "../types";

export const getUserById = async (userId: string) => {
  try {
    const userRef = doc(db, `users`, userId);
    const userData = await getDoc(userRef);
    const userDetails: User = userData.data() as User;
    return userDetails;
  } catch (error) {
    console.log("Error occured when accessing user details", error);
    return;
  }
};
