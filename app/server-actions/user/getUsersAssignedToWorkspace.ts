import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { User } from "@/app/server-actions/types";

const db = getFirestore();

export default async function getUsersAssignedToWorkspace(
  workspaceId: string
): Promise<User[]> {
  try {
    if (!workspaceId) {
      console.error("Error: workspaceId is undefined or empty!");
      return [];
    }

    const user2WorkspaceRef = collection(db, "user2workspace");
    const q = query(user2WorkspaceRef, where("workspaceId", "==", workspaceId));
    const querySnapshot = await getDocs(q);

    const userIds = querySnapshot.docs.map((doc) => doc.data().userId);

    if (userIds.length === 0) {
      console.warn("No users found for workspaceId:", workspaceId);
      return [];
    }

    const usersRef = collection(db, "users");

    if (userIds.length > 10) {
      console.warn(
        "More than 10 userIds, Firestore 'in' query might not work properly. Consider batching requests."
      );
    }

    const usersQuery = query(usersRef, where(documentId(), "in", userIds));
    const usersSnapshot = await getDocs(usersQuery);

    const users: User[] = usersSnapshot.docs.map((doc) => {
      const userData = doc.data() as Omit<User, "id">;
      return { id: doc.id, ...userData };
    });

    return users;
  } catch (error) {
    console.error("Error fetching users by workspace:", error);
    throw error;
  }
}
