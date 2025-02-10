import { collection, getDocs, query, where } from "firebase/firestore";
import { TargetId, TargetType, User, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const getUserAssociation = async (
  userId: User["id"],
  targetId: TargetId,
  targetType: TargetType
) => {
  const userAssociationCollectionRef = collection(db, "user2target");
  const userAssociationDocQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId),
    where("targetId", "==", targetId),
    where("targetType", "==", targetType)
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
    console.log(userAssociation[0]);
    return userAssociation[0];
  } catch (error) {
    console.log("Error occured when fetching user association.", error);
  }
};
