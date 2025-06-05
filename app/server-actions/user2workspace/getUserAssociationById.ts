import { collection, getDocs, query, where } from "firebase/firestore";
import { User, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const getUserAssociationById = async (userId: User["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2workspace");
  const userAssociationDocQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId)
  );

  try {
    const userAssociationDocs = await getDocs(userAssociationDocQuery);

    const result = userAssociationDocs.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<UserAssociation, "id">),
    }));

    return result[0];
  } catch (error) {
    console.error("❌ Error occured when fetching user association.", error);
    return null;
  }
};
