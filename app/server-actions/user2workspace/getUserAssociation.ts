import { collection, getDocs, query, where } from "firebase/firestore";
import { User, UserTaskAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const getUserAssociation = async (userId: User["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2task");
  const userAssociationDocQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId)
  );
  const userAssociation: UserTaskAssociation[] = [];

  try {
    const userAssociationDocs = await getDocs(userAssociationDocQuery);
    userAssociationDocs.docs.forEach((singleAssociation) =>
      userAssociation.push({
        id: singleAssociation.id,
        ...(singleAssociation.data() as Omit<UserTaskAssociation, "id">),
      })
    );
    return userAssociation;
  } catch (error) {
    console.log("Error occured when fetching user association.", error);
  }
};
