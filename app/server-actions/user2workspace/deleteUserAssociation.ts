import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const deleteUserAssociation = async (associationId: string) => {
  const docRef = doc(db, "user2workspace", associationId);
  await deleteDoc(docRef);
};
