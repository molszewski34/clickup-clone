import { Workspace } from '@/app/server-actions/types';
import { useWorkspaceFormContext } from '@/context/FormProviders/WorkspaceFormProvider';
import React from 'react';

const DescriptionInput: React.FC = () => {
  const { formData, setFormData } = useWorkspaceFormContext();

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: Workspace) => ({
      ...prevState,
      desc: e.target.value,
    }));
  };

  return (
    <div className="flex-row mt-8">
      <div className="flex w-full items-center gap-1 mb-2">
        <span className="text-gray-600 font-medium text-sm/6 font-sans">
          Description
        </span>
        <span className="text-gray-500 text-xs/3 font-sans">
          &#40;optional&#41;
        </span>
      </div>
      <input
        type="text"
        value={formData.desc || ''}
        placeholder=""
        className="w-full border border-gray-200 px-[10px] py-3 text-sm/[14px] font-sans rounded-lg"
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default DescriptionInput;
