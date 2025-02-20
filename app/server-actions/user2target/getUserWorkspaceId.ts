import { collection, getDocs, query, where } from "firebase/firestore";
import { User, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const getUserWorkspaceId = async (userId: User["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2workspace");
  const userAssociationDocQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId)
  );
  const userAssociation: UserAssociation[] = [];

  try {
    const userAssociationDocs = await getDocs(userAssociationDocQuery);
    userAssociationDocs.docs.forEach((singleAssociation) =>
      userAssociation.push({
        id: singleAssociation.id,
        ...(singleAssociation.data() as Omit<UserAssociation, "id">),
      })
    );

    return userAssociation[0];
  } catch (error) {
    console.log("Error occured when fetching user association.", error);
  }
};
