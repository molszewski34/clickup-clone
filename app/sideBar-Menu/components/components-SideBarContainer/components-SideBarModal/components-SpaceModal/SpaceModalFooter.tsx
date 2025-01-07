import { useWorkspaceFormContext } from '@/context/FormProviders/WorkspaceFormProvider';
import { useUser } from '@/context/DataProvider/UserDataProvider';
import { useCreateWorkspace } from '@/hooks/useCreateWorkspace';
import React, { useState } from 'react';

interface SpaceModalFooterProps {
  onClose: () => void;
}

const SpaceModalFooter: React.FC<SpaceModalFooterProps> = ({ onClose }) => {
  const { formData, setError } = useWorkspaceFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userId } = useUser();
  const createWorkspaceMutation = useCreateWorkspace();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      console.error('User ID is required but is null.');
      return;
    }

    if (!formData.name.trim()) {
      setError(true);
      return;
    }

    setIsSubmitting(true);
    createWorkspaceMutation.mutate(
      { formData, userId },
      {
        onSuccess: () => {
          setIsSubmitting(false);
          onClose();
        },
        onError: (error) => {
          console.error('Error creating workspace:', error);
          setIsSubmitting(false);
        },
      }
    );
  };

  return (
    <div className="flex justify-between p-4">
      <button
        className="rounded-md hover:bg-gray-200 px-[11px] h-8 text-gray-500 font-sans text-sm font-medium"
        onClick={onClose}
      >
        Use Templates
      </button>
      <button
        className="rounded-md bg-blue-500 text-white px-[11px] font-medium text-sm h-8 font-sans"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading...' : 'Continue'}
      </button>
    </div>
  );
};

export default SpaceModalFooter;
