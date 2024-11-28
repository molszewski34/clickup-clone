import { Workspace } from '@/app/server-actions/types';
import { getWorkspaces } from '@/app/server-actions/workspace/getWorkspaces';
import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';

function useFetchWorkspaces() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const { user } = useAuth();

  const fetchWorkspaces = async () => {
    if (!user) {
      console.error('Użytkownik niezalogowany');
      return;
    }

    try {
      const userWorkspaces = await getWorkspaces(user.uid);
      setWorkspaces(userWorkspaces);
    } catch (error) {
      console.error('Błąd podczas pobierania workspaces:', error);
    }
  };

  useEffect(() => {
    fetchWorkspaces();
  }, [user]);

  return { fetchWorkspaces, workspaces, setWorkspaces };
}

export default useFetchWorkspaces;