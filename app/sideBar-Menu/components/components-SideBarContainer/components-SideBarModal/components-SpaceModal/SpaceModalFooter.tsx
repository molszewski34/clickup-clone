import { useWorkspaceFormContext } from '@/context/FormProviders/WorkspaceFormProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';
import { useCreateWorkspace } from '@/hooks/useCreateWorkspace';

import React, { useState } from 'react';

const SpaceModalFooter: React.FC = () => {
  const { formData } = useWorkspaceFormContext();

  const [isSubmitting] = useState(false);
  const { userId } = useUser();

  const createWorkspaceMutation = useCreateWorkspace();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      console.error('User ID is required but is null.');
      return;
    }
    createWorkspaceMutation.mutate({ formData, userId });
  };
  return (
    <div className="flex justify-between p-4">
      <button className="rounded-md hover:bg-gray-200 px-[11px] h-8 text-gray-500 font-sans text-sm font-medium">
        Use Templates
      </button>
      <button
        className="rounded-md bg-blue-500 text-white px-[11px] font-medium text-sm h-8 font-sans"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        Continue
      </button>
    </div>
  );
};

export default SpaceModalFooter;
