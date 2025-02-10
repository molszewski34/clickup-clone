import { db } from "@/db/firebase/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { TargetId, UserAssociation } from "../types";
import { getUserById } from "../user/getUserById";

export const getUsersForWorkspace = async (workspaceId: TargetId) => {
  const userAssociationCollectionRef = collection(db, "user2space");
  const userAssociationWorkspaceQuery = query(
    userAssociationCollectionRef,
    where("targetId", "==", workspaceId)
  );

  try {
    const userAssociationsInWorkspace = await getDocs(userAssociationWorkspaceQuery);
    const userIds: UserAssociation["userId"][] = [];
    userAssociationsInWorkspace.docs.forEach((singleAssociation) => {
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
    console.error(`Could not fetch users for workspace Id: ${workspaceId}.`, error);
  }
};
