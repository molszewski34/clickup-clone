import { useState } from "react";
import RenderRadioButtons from "./components/RenderRadioButtons";
import { options } from "./components/options";

export default function SettingTime() {
  const [selectedWeekStart, setSelectedWeekStart] = useState<string>("monday");
  const [selectedTimeFormat, setSelectedTimeFormat] = useState<string>("24h");
  const [selectedDateFormat, setSelectedDateFormat] =
    useState<string>("dd/mm/yyyy");

  return (
    <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="font-sans text-sm/snug font-medium text-gray-900">
          Time & Date format
        </h2>
        <p className="font-sans text-xs/6 text-gray-500">
          Select the way times & dates are displayed.
        </p>
      </div>
      <div className="block">
        <RenderRadioButtons
          name="Start of the calendar week"
          options={options.weekStart}
          selectedValue={selectedWeekStart}
          setSelectedValue={setSelectedWeekStart}
        />
        <RenderRadioButtons
          name="Time format"
          options={options.timeFormat}
          selectedValue={selectedTimeFormat}
          setSelectedValue={setSelectedTimeFormat}
        />
        <RenderRadioButtons
          name="Date format"
          options={options.dateFormat}
          selectedValue={selectedDateFormat}
          setSelectedValue={setSelectedDateFormat}
        />
      </div>
    </div>
  );
}
