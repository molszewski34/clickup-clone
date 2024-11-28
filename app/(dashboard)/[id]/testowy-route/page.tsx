'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';
import { useInitializeWorkspace } from '../../_hooks/useInitializeWorkspace';

import TopbarNav from '@/app/topBar-Nav/components/TopbarNav';
import PageNavbar from '../../ui/PageNavbar';
import PageIndicator from '../../ui/PageIndicator';
import { Icons } from '@/icons/icons';
import useFetchWorkspaces from '../../_hooks/useFetchWorspaces';
import AddWorkspace from '../../_components/AddWorkspace';
import WorkspacesList from '../../_components/WorkspaceList/WorkspaceList';

import { addProject } from '@/app/server-actions/project/addNewProject';

interface UserHomeProps {
  params: { id: string };
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState<any | null>(null);
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [isPrivate, setisPrivate] = useState<boolean>(false);

  useInitializeWorkspace();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.uid !== params.id) {
        router.push('/login');
      }
    });

    setUserId(params.id);
    return () => unsubscribe();
  }, [params, router]);

  const { workspaces } = useFetchWorkspaces();

  const handleAddProject = async () => {
    if (!userId || !selectedWorkspace) return;

    try {
      await addProject(
        userId,
        selectedWorkspace,
        newProjectName || 'List',
        isPrivate
      );
      alert(
        `Dodano projekt "${
          newProjectName || 'List'
        }" do workspace ${selectedWorkspace}`
      );
      setNewProjectName('');
    } catch (error) {
      console.error('Błąd podczas dodawania projektu:', error);
    }
  };

  return (
    <div>
      <TopbarNav />
      <PageNavbar>
        <PageIndicator icon={<Icons.HomePageIndicatorIcon />} name="Home" />
      </PageNavbar>
      <div>
        <h2>Workspace List</h2>
        <WorkspacesList
          workspaces={workspaces}
          setSelectedWorkspace={setSelectedWorkspace}
        />
        <hr />
        <AddWorkspace />
      </div>
      {selectedWorkspace && (
        <div className="add-project-form">
          <h3>Dodaj projekt do: {selectedWorkspace}</h3>
          <input
            type="text"
            placeholder="Nazwa projektu"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <label htmlFor="">
            Czy jest prywatny?{' '}
            <input type="checkbox" onClick={() => setisPrivate(!isPrivate)} />
          </label>
          <button onClick={handleAddProject}>Dodaj Projekt</button>
        </div>
      )}
    </div>
  );
};

export default UserHomePage;
