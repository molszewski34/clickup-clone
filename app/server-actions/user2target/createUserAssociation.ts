import { addDoc, collection } from "firebase/firestore";
import { Role, TargetId, TargetType, User } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getUserById } from "../user/getUserById";
import { getSpaceById } from "../spaces/getSpaceById";
import { getUserAssociation } from "./getUserAssociation";

export const createUserAssociation = async (
  targetType: TargetType,
  userId: User["id"],
  targetId: TargetId,
  role: Role
) => {
  const user2targetRef = collection(db, "user2target");

  try {
    const user = getUserById(userId);
    const space = getSpaceById(targetId);
    const userAssociation = await getUserAssociation(userId, targetId, targetType);
    if (!user || !space || userAssociation) {
      if (!user) {
        console.error(
          `Error occured when adding user to space. User with ID: ${userId} does not exist!`
        );
      }
      if (!space) {
        console.error(
          `Error occured when adding user to space. Space with ID: ${targetId} does not exist!`
        );
      }
      if (userAssociation) {
        console.error("This association already exists!");
      }
      return;
    }
    await addDoc(user2targetRef, { userId, targetId, role, joinedAt: new Date() });
    console.log("User added to space successfully!");
  } catch (error) {
    console.error("Error occured when adding user to space. ", error);
  }
};
