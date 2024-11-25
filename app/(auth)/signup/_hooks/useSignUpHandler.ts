import React, { FormEvent, useState } from 'react';

import { auth, db } from '@/db/firebase/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
function useSignUpHandler() {
  const [signUpFullName, setSignUpFullName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: signUpFullName });
      await setDoc(doc(db, 'users', user.uid), {
        signUpFullName,
        signUpEmail,
        uid: user.uid,
        createdAt: new Date().toISOString(),
      });

      console.log('Account created successfully!');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSignUpError(err.message);
      } else {
        setSignUpError('An unknown error occurred.');
      }
    }
  };
  return {
    signUpFullName,
    setSignUpFullName,
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
