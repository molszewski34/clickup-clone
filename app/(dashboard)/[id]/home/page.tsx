'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';
import { useInitializeWorkspace } from '../../_hooks/useInitializeWorkspace';

interface UserHomeProps {
  params: {
    id: string;
  };
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const { id } = params;
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
    </div>
  );
};

export default UserHomePage;
