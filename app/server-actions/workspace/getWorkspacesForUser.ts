import { collection, getDocs, query, where } from "firebase/firestore";
import { User, UserAssociation, Workspace } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getWorkspaceById } from "./getWorkspaceById";

export const getWorkspacesForUser = async (userId: User["id"]) => {
  const userAssociationCollectionRef = collection(db, "user2workspace");
  const userAssociationForUserQuery = query(
    userAssociationCollectionRef,
    where("userId", "==", userId)
  );

  try {
    const userAssociationsForUser = await getDocs(userAssociationForUserQuery);
    const workspaceIds: UserAssociation["workspaceId"][] = [];
    userAssociationsForUser.docs.forEach((singleAssociation) => {
      workspaceIds.push(singleAssociation.data().workspaceId);
    });
    const workspaceDataPromises = workspaceIds.map(async (singleWorkspaceId) => {
      const workspaceData = await getWorkspaceById(singleWorkspaceId);
      if (!workspaceData) {
        console.error(`Could not fetch data for space ID: ${singleWorkspaceId}`);
      }
      return { id: singleWorkspaceId, ...workspaceData } as Workspace;
    });
    const userWorkspaces = (await Promise.all(workspaceDataPromises)).filter(
      (singleUserTarget) => singleUserTarget !== undefined
    );
    console.log(userWorkspaces);
    return userWorkspaces;
  } catch (error) {
    console.error(`Could not fetch spaces for user ID: ${userId}.`, error);
  }
};
