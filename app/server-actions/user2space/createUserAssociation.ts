import { addDoc, collection } from "firebase/firestore";
import { Role, Space, User } from "../types";
import { db } from "@/db/firebase/lib/firebase";
import { getUserById } from "../user/getUserById";
import { getSpaceById } from "../spaces/getSpaceById";
import { getUserAssociation } from "./getUserAssociation";

export const createUserAssociation = async (
  userId: User["id"],
  spaceId: Space["id"],
  role: Role
) => {
  const user2spaceRef = collection(db, "user2space");

  try {
    const user = getUserById(userId);
    const space = getSpaceById(spaceId);
    const userAssociation = await getUserAssociation(userId, spaceId);
    if (!user || !space || userAssociation) {
      if (!user) {
        console.error(
          `Error occured when adding user to space. User with ID: ${userId} does not exist!`
        );
      }
      if (!space) {
        console.error(
          `Error occured when adding user to space. Space with ID: ${spaceId} does not exist!`
        );
      }
      if (userAssociation) {
        console.error("This association already exists!");
      }
      return;
    }
    await addDoc(user2spaceRef, { userId, spaceId, role, joinedAt: new Date() });
    console.log("User added to space successfully!");
  } catch (error) {
    console.error("Error occured when adding user to space. ", error);
  }
};
