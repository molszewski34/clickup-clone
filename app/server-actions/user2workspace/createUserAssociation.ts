import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Role, User, Workspace } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getUserAssociation } from "./getUserAssociation";
import { getWorkspaceById } from "../workspace/getWorkspaceById";
import { getUserById } from "../user/getUserById";

export const createUserAssociation = async (
  userId: User["id"],
  workspaceId: Workspace["id"],
  role: Role
) => {
  const user2workspaceRef = collection(db, "user2workspace");
  try {
    const workspace = await getWorkspaceById(workspaceId);
    const user = await getUserById(userId);

    if (!user || !workspace) {
      if (!user) {
        console.error(`Error occured when adding user to workspace. User not found!`);
      }
      if (!workspace) {
        console.error(
          `Error occured when adding user to workspace. Space with ID: ${workspaceId} does not exist!`
        );
      }
      return;
    } else {
      const userAssociation = await getUserAssociation(user.id, workspace.id);
      if (userAssociation) {
        console.error("This association already exists!");
        return;
      }
    }

    await addDoc(user2workspaceRef, {
      userId: user.id,
      userEmail: user.signUpEmail,
      userFullName: user.signUpFullName,
      workspaceId,
      role,
      joinedAt: serverTimestamp(),
    });
    console.log("User added to workspace successfully!");
  } catch (error) {
    console.error("Error occured when adding user to workspace. ", error);
  }
};
