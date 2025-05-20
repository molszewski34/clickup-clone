import { db } from "@/db/firebase/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const checkIfUserAssociationToTaskExist = async (
  userId: string,
  taskId: string
) => {
  const user2TaskRef = collection(db, "user2task");

  try {
    const q = query(
      user2TaskRef,
      where("userId", "==", userId),
      where("taskId", "==", taskId)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log(`No association found for user ${userId} and task ${taskId}`);
      return;
    }

    snapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
      console.log(`User ${userId} removed from task ${taskId}`);
    });
  } catch (error) {
    console.error(
      "Error occurred while removing user association from task: ",
      error
    );
  }
};
