'use client';

import React, { useEffect, useState, useCallback } from 'react';
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
import useHandleAddProject from '../../_hooks/useHandleAddProject';

import WorkspacesList from '../../_components/WorkspaceList/WorkspaceList';
import AddProjectForm from '../../_components/AddProject';

interface UserHomeProps {
  params: { id: string };
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

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

  const {
    handleAddProject,
    selectedWorkspace,
    setSelectedWorkspace,
    newProjectName,
    setNewProjectName,
    isPrivate,
    setIsPrivate,
  } = useHandleAddProject();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setNewProjectName(e.target.value),
    [setNewProjectName]
  );

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
        <AddProjectForm
          selectedWorkspace={selectedWorkspace}
          handleAddProject={handleAddProject}
          newProjectName={newProjectName}
          handleInputChange={handleInputChange}
          isPrivate={isPrivate}
          setIsPrivate={setIsPrivate}
          onCancel={() => setSelectedWorkspace(null)}
        />
      )}
    </div>
  );
};

export default UserHomePage;
