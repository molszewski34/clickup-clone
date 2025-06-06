import { collection, getDocs, query, where } from "firebase/firestore";
import { User } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { DataContextType } from "@/context/DataProvider/DataProvider";

export const getUserAssociations = async (userId: User["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2task");
  const userAssociationDocQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId)
  );
  const userAssociation: DataContextType[] = [];

  try {
    const userAssociationDocs = await getDocs(userAssociationDocQuery);
    userAssociationDocs.docs.forEach((singleAssociation) =>
      userAssociation.push(singleAssociation.data() as DataContextType)
    );
    return userAssociation;
  } catch (error) {
    console.error("Error occured when fetching user association.", error);
  }
};
