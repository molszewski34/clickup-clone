import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useCreateProject } from "@/app/(dashboard)/_hooks/useCreateProject";

interface ListModalProps {
  toggleModal: (modal: "none" | "menuWorkspaceList" | "createList") => void;
}

interface FormValues {
  name: string;
  isPrivate: boolean;
}

const ListModal: React.FC<ListModalProps> = ({ toggleModal }) => {
  const { userId } = useUser();
  const createProjectMutation = useCreateProject({ toggleModal });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const nameValue = watch("name");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!userId) {
      console.error("User ID is required but is null.");
      return;
    }

    createProjectMutation.mutate({
      projectName: data.name,
      isPrivate: data.isPrivate,
      userId,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative flex flex-col gap-2 justify-between p-6 pb-0">
        <div className="flex items-center font-sans font-semibold text-gray-800 text-lg/5">
          Create List
        </div>
        <button
          type="button"
          onClick={() => toggleModal("none")}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white font-semibold text-gray-400 
          hover:rotate-180 transition-transform duration-300 ease-in-out"
        >
          ✕
        </button>
        <div className="flex font-sans text-sm text-gray-500">
          A List represents major departments or organizations, each with its
          own workflows, settings, and integrations.
        </div>
      </div>

      <div className="p-6 pb-0">
        <div>
          <h3 className="text-gray-600 font-medium text-sm font-sans pb-2">
            Name
          </h3>
          <input
            type="text"
            placeholder="e.g. Marketing, Engineering, HR"
            className="w-full border border-gray-200 px-3 py-2 text-sm font-sans rounded-lg"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="flex justify-between py-5">
          <div className="flex-row">
            <p className="text-gray-600 font-medium text-sm font-sans">
              Make Private
            </p>
            <p className="text-gray-500 text-sm font-sans mt-1">
              Only you and invited members have access
            </p>
          </div>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only peer"
                {...register("isPrivate")}
              />
              <div className="relative w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-4" />
            </label>
          </div>
        </div>
      </div>

      <div className="relative bottom-0 bg-gray-100">
        <div className="w-full h-px bg-gray-200" />
        <div className="flex justify-between items-center w-full h-14 px-4">
          <button
            type="button"
            className="rounded-md hover:bg-gray-200 px-3 h-8 text-gray-500 font-sans text-sm font-medium"
          >
            Use Templates
          </button>
          <button
            type="submit"
            className={`rounded-md bg-blue-500 text-white px-3 font-medium text-sm h-8 font-sans ${
              !nameValue ? "opacity-70" : ""
            }`}
            disabled={isSubmitting || !nameValue}
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default ListModal;
