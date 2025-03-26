import { db } from "@/db/firebase/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Space } from "@/app/server-actions/types";

export const getSpaces = async (workspaceId: string): Promise<Space[]> => {
  try {
    const workspacesRef = collection(db, `workspace/${workspaceId}/spaces`);

    const querySnapshot = await getDocs(workspacesRef);

    const workspaces: Space[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Space, "id">),
    }));

    return workspaces;
  } catch (error) {
    console.error("Błąd podczas pobierania workspaces:", error);
    throw new Error("Błąd podczas pobierania workspaces: " + error);
  }
};
