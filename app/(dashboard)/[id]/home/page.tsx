'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';
import { logoutUser } from '../../utils/logoutUser';
import { useInitializeWorkspace } from '../../_hooks/useInitializeWorkspace';

import TopbarNav from '@/app/topBar-Nav/components/TopbarNav';
import AddWorkspace from '../../_components/AddWorkspace';

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
      <TopbarNav />
      <h1>Użytkownik ma id: {id}!</h1>
      <p>Witaj w swoim dashboard</p>
      <AddWorkspace />
      <button onClick={logoutUser}>Wyloguj</button>
    </div>
  );
};

export default UserHomePage;
