import React from "react";

const DescriptionInput: React.FC = () => {
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
        placeholder=""
        className="w-full border border-gray-200 px-[10px] py-3 text-sm/[14px] font-sans rounded-lg"
      />
    </div>
  );
};

export default DescriptionInput;
