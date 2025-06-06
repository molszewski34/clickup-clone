import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const updateSpace = async (
  workspaceId: string,
  spaceName: string,
  spaceId: string,
  isPrivate: boolean
) => {
  try {
    const taskRef = doc(db, `workspace/${workspaceId}/spaces/${spaceId}`);

    await updateDoc(taskRef, {
      createdAt: serverTimestamp(),
      name: spaceName,
      isPrivate: isPrivate,
      desc: "",
      icon: "",
      filtersState: {
        isOpen: false,
        searchQuery: "",
        assignedToMe: false,
        assignedTo: [],
        statuses: [],
      },
    });
  } catch (error) {
    console.error("Błąd podczas aktualizowania listy", error);
  }
};
