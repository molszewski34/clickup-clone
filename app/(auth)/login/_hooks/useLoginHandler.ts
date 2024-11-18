import React, { FormEvent, useState } from 'react';
import { auth } from '@/db/firebase/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
function useLoginHandler() {
  const [loginError, setLoginError] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError('');

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
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
