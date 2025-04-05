import { db } from "@/db/firebase/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getTaskLocation = async (taskId: string) => {
  try {
    const workspacesRef = collection(db, "workspace");
    const workspacesSnapshot = await getDocs(workspacesRef);

    let foundTaskLocation = null;

    for (const workspaceDoc of workspacesSnapshot.docs) {
      const spacesRef = collection(workspaceDoc.ref, "spaces");
      const spacesSnapshot = await getDocs(spacesRef);

      for (const spaceDoc of spacesSnapshot.docs) {
        const listsRef = collection(spaceDoc.ref, "lists");
        const listsSnapshot = await getDocs(listsRef);

        for (const listDoc of listsSnapshot.docs) {
          const tasksRef = collection(listDoc.ref, "tasks");
          const tasksSnapshot = await getDocs(tasksRef);

          tasksSnapshot.forEach((taskDoc) => {
            if (taskDoc.id === taskId) {
              foundTaskLocation = {
                workspaceId: workspaceDoc.id,
                spaceId: spaceDoc.id,
                listId: listDoc.id,
                taskId: taskDoc.id,
              };
            }
          });
        }
      }
    }

    return foundTaskLocation;
  } catch (error) {
    console.error("Błąd podczas przeszukiwania lokalizacji zadania:", error);
    return null;
  }
};
