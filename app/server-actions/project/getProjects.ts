import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/db/firebase/lib/firebase';

export const getProjects = async (userId: string, workspaceId: string) => {
  try {
    const projectsRef = collection(
      db,
      `users/${userId}/workspaces/${workspaceId}/projects`
    );
    const querySnapshot = await getDocs(projectsRef);

    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('Pobrano projekty:', projects);
    return projects;
  } catch (error) {
    console.error('Błąd podczas pobierania projektów', error);
    return [];
  }
};
