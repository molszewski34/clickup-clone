import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { UserAssociation } from "../types";
import { db } from "@/db/firebase/lib/firebase";

export default async function getUsersAssociatedToWorkspace(
  workspaceId: string
): Promise<UserAssociation[]> {
  try {
    if (!workspaceId) {
      console.error("workspaceId is undefined or empty!");
      return [];
    }

    const user2WorkspaceRef = collection(db, "user2workspace");
    const q = query(user2WorkspaceRef, where("workspaceId", "==", workspaceId));
    const snapshot = await getDocs(q);

    const users: UserAssociation[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userId: data.userId,
        userEmail: data.userEmail,
        userFullName: data.userFullName,
        userLastActive: data.userLastActive,
        joinedAt: (data.joinedAt as Timestamp).toDate(),
        role: data.role,
        workspaceId: data.workspaceId,
      };
    });

    return users;
  } catch (error) {
    console.error("Error fetching user2workspace entries:", error);
    throw error;
  }
}
