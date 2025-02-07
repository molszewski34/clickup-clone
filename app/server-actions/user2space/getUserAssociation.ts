import { collection, getDocs, query, where } from "firebase/firestore";
import { Space, User, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const getUserAssociation = async (userId: User["id"], spaceId: Space["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2space");
  const userAssociationDocQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId),
    where("spaceId", "==", spaceId)
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
