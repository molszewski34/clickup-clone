import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";

// Zdefiniuj typ dla projektu
interface Project {
  id: string;
  name: string;
  // Możesz dodać inne pola, które zwraca Firestore, jeśli są istotne
}

export const getProjects = async (
  userId: string,
  workspaceId: string
): Promise<Project[]> => {
  try {
    const projectsRef = collection(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects`
    );
    const querySnapshot = await getDocs(projectsRef);

    // Zwracamy projekty z odpowiednimi typami
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      ...doc.data(),
    }));

    return projects;
  } catch (error) {
    console.error("Błąd podczas pobierania projektów", error);
    return [];
  }
};
