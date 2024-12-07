import React, { useState } from "react";
import { useWorkspaceFormContext } from "@/context/DataProvider/FormProviders/WorkspaceFormProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useCreateWorkspace } from "@/hooks/useCreateWorkspace";
import { Workspace } from "@/app/server-actions/types";

interface ListModalProps {
  toggleModal: (modal: "none" | "modal1" | "modal2") => void;
}

const ListModal: React.FC<ListModalProps> = ({ toggleModal }) => {
  const { formData, setFormData } = useWorkspaceFormContext();

  const [isSubmitting] = useState(false);
  const { userId } = useUser();

  const createWorkspaceMutation = useCreateWorkspace();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      console.error("User ID is required but is null.");
      return;
    }
    createWorkspaceMutation.mutate({ formData, userId });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: Workspace) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  return (
    <>
      <div className="relative flex  flex-col gap-[2px] justify-between p-6 pb-0 ">
        <div className=" flex items-center font-sans font-semibold text-gray-800 text-lg/5">
          Create List
        </div>
        <button
          onClick={() => toggleModal("none")}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white font-semibold text-gray-400 
      hover:rotate-180 transition-transform duration-300 ease-in-out"
        >
          ✕
        </button>
        <div className="flex font-sans text-sm/6 text-gray-500">
          A List represents major departments or organizations, each with its
          own workflows, settings, and integrations.
        </div>
      </div>
      <div className="p-6 pb-0">
        <div className="">
          <h3 className="text-gray-600 font-medium text-sm/6 font-sans  pb-[10px]">
            Name
          </h3>
          {/* Pole tekstowe do wpisania nazwy */}
          <input
            type="text"
            placeholder="e.g. Marketing, Engineering, HR"
            className="w-full border border-gray-200 px-[10px] py-2 text-sm/[14px] font-sans rounded-lg"
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="flex justify-between py-5">
          <div className="flex-row">
            <p className="text-gray-600 font-medium text-sm/4 font-sans">
              Make Private
            </p>
            <p className="text-gray-500 text-sm/4 font-sans mt-1">
              Only you and invited members have access
            </p>
          </div>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer group">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() =>
                  setFormData((prevState: Workspace) => ({
                    ...prevState,
                    isPrivate: !formData.isPrivate,
                  }))
                }
              />
              <div className="relative w-[36px] h-[22px] bg-gray-400 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:w-[16px] after:h-[16px] after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-[16px]" />
            </label>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 bg-gray-100">
        <div className="w-full h-px bg-gray-200" />
        <div className="flex justify-between items-center w-full h-[59px] px-4">
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
      </div>
    </>
  );
};

export default ListModal;
