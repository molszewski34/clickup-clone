import { collection, query, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

export const createDefaultWorkspace = async (userId: string) => {
  const workspaceCollectionRef = collection(db, `users/${userId}/workspaces`);

  try {
    const existingWorkspacesSnapshot = await getDocs(
      query(workspaceCollectionRef)
    );
    if (!existingWorkspacesSnapshot.empty) {
      return;
    }

    const cryptoUUID = crypto.randomUUID();
    const workspaceRef = doc(db, `users/${userId}/workspaces/${cryptoUUID}`);

    await setDoc(workspaceRef, {
      name: "Workspace",
      id: cryptoUUID,
      createdAt: new Date(),
      userId,
      desc: "",
      icon: { activeColor: "indigo-500", selectedIconName: "" },
      isPrivate: false,
    });

    const projectUUID = crypto.randomUUID();
    const projectRef = doc(
      db,
      `users/${userId}/workspaces/${cryptoUUID}/projects/${projectUUID}`
    );
    await setDoc(projectRef, {
      name: "Project",
      id: projectUUID,
      isPrivate: false,
    });

    const taskUUID = crypto.randomUUID();
    const taskRef = doc(
      db,
      `users/${userId}/workspaces/${cryptoUUID}/projects/${projectUUID}/tasks/${taskUUID}`
    );
    await setDoc(taskRef, {
      id: taskUUID,
      taskName: "Task",
      dueDate: "",
      assignees: [],
      timeEstimate: "",
      priority: "",
      details: "",
    });
  } catch (error) {
    console.error("Błąd podczas tworzenia workspace", error);
  }
};
