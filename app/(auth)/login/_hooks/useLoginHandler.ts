'use client';

import { FormEvent, useState } from 'react';
import {
  auth,
  initializeFirebasePersistence,
} from '@/db/firebase/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
function useLoginHandler() {
  const [loginError, setLoginError] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const router = useRouter();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError('');

    try {
      await initializeFirebasePersistence();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const userId = userCredential.user.uid;

      router.push(`/${userId}/home`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError('An unknown error occurred.');
      }
    }
  };
  return {
    loginError,
    setLoginError,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  };
}

export default useLoginHandler;
