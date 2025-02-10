import { doc, updateDoc } from "firebase/firestore";
import { Role, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const updateUserAssociation = async (id: UserAssociation["id"], role: Role) => {
  const userAssociationRef = doc(db, `user2target/${id}`);

  try {
    await updateDoc(userAssociationRef, { role });
    console.log(`User's role set to ${role}`);
  } catch (error) {
    console.log(`Error when updating user's role. `, error);
  }
};
