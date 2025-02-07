import { deleteDoc, doc } from "firebase/firestore";
import { Space, User } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getUserAssociation } from "./getUserAssociation";

export const deleteUserAssociation = async (userId: User["id"], spaceId: Space["id"]) => {
  try {
    const userAssociation = await getUserAssociation(userId, spaceId);
    if (!userAssociation) {
      console.error("Cannot delete this user association.");
      return;
    }
    await deleteDoc(doc(db, `user2space/${userAssociation.id}`));
    console.log("Successfully deleted user association");
  } catch (error) {
    console.error("Error when deleting user association. ", error);
  }
};
