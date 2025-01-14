import React from "react";
import { preferencesOptions } from "./components/preferencesOptions";
import ToggleOption from "./components/ToggleOption";

const SettingPreference: React.FC = () => {
  return (
    <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="font-sans text-sm/snug font-medium text-gray-900">
          Preferences
        </h2>
        <p className="font-sans text-xs/6 text-gray-500">
          Manage your in-app preferences.
        </p>
      </div>
      <div className="flex flex-col">
        {preferencesOptions.map((option, index) => (
          <ToggleOption
            key={index}
            title={option.title}
            description={option.description}
            hasTopBorder={option.hasTopBorder}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingPreference;
