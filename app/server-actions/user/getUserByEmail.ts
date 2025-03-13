import { db } from "@/db/firebase/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { User } from "../types";

export const getUserByEmail = async (
  signUpEmail: string
): Promise<User | null> => {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("signUpEmail", "==", signUpEmail));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error(`Error! User with email ${signUpEmail} not found`);
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() } as User;
  } catch (error) {
    console.error("Error occurred when accessing user details", error);
    return null;
  }
};
