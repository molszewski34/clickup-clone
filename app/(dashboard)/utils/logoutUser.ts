import { signOut } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';

export const logoutUser = async () => {
  await signOut(auth);
  console.log('Użytkownik został wylogowany');
};
