import React from "react";

const PrivacyToggle: React.FC = () => {
  return (
    <div className="flex justify-between mt-8 mb-2">
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
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-[36px] h-[22px] bg-gray-400 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:w-[16px] after:h-[16px] after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-[16px]" />
        </label>
      </div>
    </div>
  );
};

export default PrivacyToggle;
