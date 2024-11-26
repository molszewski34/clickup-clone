import { useEffect } from 'react';
import { auth } from '@/db/firebase/lib/firebase';
import { createDefaultWorkspace } from '@/app/server-actions/workspace/createDefaultWorkspace';

export const useInitializeWorkspace = () => {
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      createDefaultWorkspace(user.uid);
    }
  }, []);
};
