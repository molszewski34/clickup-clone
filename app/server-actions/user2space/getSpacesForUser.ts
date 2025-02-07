import { collection, getDocs, query, where } from "firebase/firestore";
import { User, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getSpaceById } from "../spaces/getSpaceById";

export const getSpacesForUser = async (userId: User["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2space");
  const userAssociationForUserQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId)
  );

  try {
    const userAssociationsForUser = await getDocs(userAssociationForUserQuery);
    const spaceIds: UserAssociation["spaceId"][] = [];
    userAssociationsForUser.docs.forEach((singleAssociation) => {
      spaceIds.push(singleAssociation.data().spaceId);
    });
    const spaceDataPromises = spaceIds.map(async (singleSpaceId) => {
      const spaceData = await getSpaceById(singleSpaceId);
      if (!spaceData) {
        console.error(`Could not fetch data for space ID: ${singleSpaceId}`);
      }
      return spaceData;
    });
    const userSpaces = (await Promise.all(spaceDataPromises)).filter(
      (singleUserSpace) => singleUserSpace !== undefined
    );
    console.log(userSpaces);
    return userSpaces;
  } catch (error) {
    console.error(`Could not fetch spaces for user ID: ${userId}.`, error);
  }
};
