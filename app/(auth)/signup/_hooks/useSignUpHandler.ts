import React, { FormEvent, useState } from 'react';

import { auth } from '@/db/firebase/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function useSignUpHandler() {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpError('');

    try {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSignUpError(err.message);
      } else {
        setSignUpError('An unknown error occurred.');
      }
    }
  };
  return {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    setSignUpError,
    handleRegister,
  };
}

export default useSignUpHandler;
