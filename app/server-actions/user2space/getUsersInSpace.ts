import { db } from "@/db/firebase/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Space, UserAssociation } from "../types";
import { getUserById } from "../user/getUserById";

export const getUsersInSpace = async (spaceId: Space["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2space");
  const userAssociationSpaceQuery = query(
    userAssociationCollectionRef,
    where("spaceId", "==", spaceId)
  );

  try {
    const userAssociationsInSpace = await getDocs(userAssociationSpaceQuery);
    const userIds: UserAssociation["userId"][] = [];
    userAssociationsInSpace.docs.forEach((singleAssociation) => {
      userIds.push(singleAssociation.data().userId);
    });
    const userDataPromises = userIds.map(async (singleUserId) => {
      const userData = await getUserById(singleUserId);
      if (!userData) {
        console.error(`Could not fetch data for user ID: ${singleUserId}`);
      }
      return userData;
    });
    const usersInSpace = (await Promise.all(userDataPromises)).filter(
      (singleUserInSpace) => singleUserInSpace !== undefined
    );
    return usersInSpace;
  } catch (error) {
    console.error(`Could not fetch users for space Id: ${spaceId}.`, error);
  }
};
