import React from "react";

type Option = {
  id: string;
  label: string;
};

interface RenderRadioButtonsProps {
  name: string;
  options: Option[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const RenderRadioButtons: React.FC<RenderRadioButtonsProps> = ({
  name,
  options,
  selectedValue,
  setSelectedValue,
}) => (
  <div className="mb-6">
    <h2 className="font-sans text-xs/snug font-medium text-gray-700 mb-2">
      {name}
    </h2>
    {options.map((option) => (
      <div className="flex items-center mb-4" key={option.id}>
        <input
          id={option.id}
          type="radio"
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
          checked={selectedValue === option.id}
          onChange={() => setSelectedValue(option.id)}
        />
        <label htmlFor={option.id} className="ms-2 text-sm text-gray-700">
          {option.label}
        </label>
      </div>
    ))}
  </div>
);

export default RenderRadioButtons;
