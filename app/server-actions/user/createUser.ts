import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { User } from "../types";

export const createUser = async (
  signUpFullName: string,
  signUpEmail: string,
  userId: string,
  activeWorkspace?: User["activeWorkspace"]
) => {
  const usersRef = doc(db, "users", userId);

  try {
    if (!userId || !signUpFullName || !signUpEmail) {
      if (!userId) {
        console.error("Missing user ID");
      }
      if (!signUpFullName) {
        console.error("Missing full name");
      }
      if (!signUpEmail) {
        console.error("Missing signUpEmail");
      }
      return;
    } else {
      await setDoc(usersRef, {
        signUpFullName,
        signUpEmail,
        createdAt: serverTimestamp(),
        activeWorkspace: activeWorkspace,
      });

      const newDoc = await getDoc(usersRef);
      if (!newDoc.data()) {
        return;
      } else {
        return {
          ...(newDoc.data() as Omit<User, "id">),
          id: newDoc.id,
        } as User;
      }
    }
  } catch (error) {
    console.error(`Error occured while creating a user.`, error);
  }
};
