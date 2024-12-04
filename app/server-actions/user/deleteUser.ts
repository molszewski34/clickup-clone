import { db } from '@/db/firebase/lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteUser = async (userId: string) => {
  try {
    const userRef = doc(db, `users/${userId}`);

    await deleteDoc(userRef);

    console.log(`User o id: ${userId} został usunięty`);
  } catch (error) {
    console.error('Error deleting workspace', error);
    throw new Error('Error deleting workspace: ' + error);
  }
};