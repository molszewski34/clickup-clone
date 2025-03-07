import { doc, updateDoc } from "firebase/firestore";
import { Role, User, UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export const updateUserAssociation = async (
  id: UserAssociation["id"],
  role?: Role,
  userEmail?: User["signUpEmail"],
  userFullName?: User["signUpFullName"],
  userId?: User["userId"]
) => {
  const userAssociationRef = doc(db, `user2workspace/${id}`);

  const newUserAssociationProperties = {
    role,
    userEmail,
    userFullName,
    userId,
  };
  const userAssociationProperties: Record<
    string,
    Role | User["signUpEmail"] | User["signUpFullName"]
  > = {};
  Object.entries(newUserAssociationProperties).forEach(([key, value]) => {
    if (value === undefined) return;
    userAssociationProperties[key] = value;
  });

  try {
    await updateDoc(userAssociationRef, userAssociationProperties);
    console.log(`User's role set to ${role}`);
  } catch (error) {
    console.log(`Error when updating user's role. `, error);
  }
};
