'use client';

import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';
import { logoutUser } from '../../utils/logoutUser';
import { useInitializeWorkspace } from '../../_hooks/useInitializeWorkspace';


interface UserHomeProps {
  params: Promise<{ id: string }>;
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();

  useInitializeWorkspace();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.uid !== id) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [id, router]);

  return (
    <div>
      <h1>Użytkownik ma id: {id}!</h1>
      <p>Witaj w swoim dashboard</p>
      <button onClick={logoutUser}>Wyloguj</button>
    </div>
  );
};

export default UserHomePage;
