import { db } from "@/db/firebase/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Workspace } from "@/app/server-actions/types";

// Funkcja tworzy nowy workspace i dodaje domyślny nowy projekt o nazwie List.
export const createNewWorkspacev2 = async (
  newWorkspace: Workspace,
  userId: string
) => {
  try {
    const workspaceRef = doc(
      db,
      `users/${userId}/workspaces/${newWorkspace.id}`
    );
    await setDoc(workspaceRef, {
      name: newWorkspace.name,
      createdAt: newWorkspace.createdAt,
      userId: userId,
      desc: newWorkspace.desc,
      icon: newWorkspace.icon,
      isPrivate: newWorkspace.isPrivate,
    });
    console.log("Workspace added successfully");

    // Dodajemy domyślny projekt "List"
    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${newWorkspace.id}/projects/default`
    );
    await setDoc(projectRef, {
      name: "List",
      createdAt: new Date().toISOString(),
      workspaceId: newWorkspace.id,
      tasks: [],
    });

    console.log('Default project "List" added successfully');
  } catch (error) {
    console.error("Error creating workspace:", error);
  }
};
