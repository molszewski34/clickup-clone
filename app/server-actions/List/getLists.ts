import { db } from "@/db/firebase/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { List, Space, Workspace } from "@/app/server-actions/types";

export const getLists = async (
  workspaceId: Workspace["id"],
  spaceId: Space["id"]
) => {
  try {
    const listRef = collection(
      db,
      `workspace/${workspaceId}/spaces/${spaceId}/lists`
    );

    const querySnapshot = await getDocs(listRef);

    const lists: List[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<List, "id">),
    }));

    return lists;
  } catch (error) {
    console.error("Błąd podczas pobierania lists:", error);
    throw new Error("Błąd podczas pobierania lists: " + error);
  }
};
