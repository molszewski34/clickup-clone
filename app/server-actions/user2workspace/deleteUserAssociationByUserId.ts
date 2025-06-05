import { deleteDoc, doc } from "firebase/firestore";
import { UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getUserAssociation } from "./getUserAssociation";

export const deleteUserAssociationByUserId = async (
  userId: UserAssociation["userId"]
) => {
  try {
    const userAssociation = await getUserAssociation(userId);
    if (!userAssociation) {
      console.error("Cannot delete this user association.");
      return;
    }
    await deleteDoc(doc(db, `user2workspace/${userAssociation.id}`));
  } catch (error) {
    console.error("Error when deleting user association. ", error);
  }
};
