import React from "react";

const SpaceModalFooter: React.FC = () => {
  return (
    <div className="flex justify-between p-4">
      <button className="rounded-md hover:bg-gray-200 px-[11px] h-8 text-gray-500 font-sans text-sm font-medium">
        Use Templates
      </button>
      <button className="rounded-md bg-blue-500 text-white px-[11px] font-medium text-sm h-8 font-sans">
        Continue
      </button>
    </div>
  );
};

export default SpaceModalFooter;
