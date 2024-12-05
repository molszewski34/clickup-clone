import React from "react";
import { Icons } from "@/icons/icons";

interface SpaceModalHeaderProps {
  onClose: () => void;
}

const SpaceModalHeader: React.FC<SpaceModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex relative items-center justify-between p-6 pb-[13px]">
      <div className="flex-row">
        <h2 className="text-gray-900 font-semibold text-lg font-sans">
          Create a space
        </h2>
        <p className="w-11/12 text-gray-500 text-sm/6 font-sans">
          A Space represents teams, departments, or groups, each with its own
          Lists, workflows, and settings.
        </p>
      </div>
      <button
        className="absolute flex justify-center items-center p-[6px] top-4 right-4 rounded-lg hover:bg-gray-100"
        onClick={onClose}
      >
        <Icons.CloseIcon className="text-[16px] text-gray-400" />
      </button>
    </div>
  );
};

export default SpaceModalHeader;
