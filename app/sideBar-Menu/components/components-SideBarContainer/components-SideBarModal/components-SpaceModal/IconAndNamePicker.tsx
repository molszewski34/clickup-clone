import React, { useRef, useEffect } from "react";
import { AddIcons } from "../AddIcons"; // Import AddIcons
import IconAndColorPicker from "../IconAndColorPicker";

interface IconAndNamePickerProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedIcon: keyof typeof AddIcons; // Ensure this is a valid key of AddIcons
  setSelectedIcon: (icon: keyof typeof AddIcons) => void; // Ensure this accepts valid keys of AddIcons
}

const IconAndNamePicker: React.FC<IconAndNamePickerProps> = ({
  isModalVisible,
  setModalVisible,
  selectedColor,
  setSelectedColor,
  selectedIcon,
  setSelectedIcon,
}) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (bodyRef.current && !bodyRef.current.contains(event.target as Node)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalVisible]);

  const buttonColorClass = `bg-${selectedColor} text-white`;

  const SelectedIconComponent = selectedIcon ? AddIcons[selectedIcon] : null;

  return (
    <div className="mt-5">
      <h3 className="text-gray-600 font-medium text-sm/6 font-sans">
        Icon & name
      </h3>
      <div className="relative flex items-center w-full gap-3 mt-2">
        <button
          onClick={() => setModalVisible(!isModalVisible)}
          className={`flex min-w-[34px] min-h-[34px] items-center justify-center rounded-lg border border-gray-200 font-sans text-sm font-semibold ${buttonColorClass}`}
        >
          {SelectedIconComponent ? (
            <SelectedIconComponent className="text-white" />
          ) : (
            "M"
          )}
        </button>
        {isModalVisible && (
          <div
            ref={bodyRef}
            className="absolute top-[55px] left-0 z-50 w-[276px] bg-white shadow-custom rounded-lg"
          >
            <div className="relative pb-4">
              <p className="text-gray-400 font-sans font-semibold text-[11px] mt-2 mb-1 px-4 py-2 ">
                Space color
              </p>
              <IconAndColorPicker
                onColorChange={setSelectedColor}
                onIconSelect={setSelectedIcon}
              />
            </div>
          </div>
        )}
        <input
          type="text"
          placeholder="e.g. Marketing, Engineering, HR"
          className="w-full border border-gray-200 px-[10px] py-3 text-sm/[14px] font-sans rounded-lg"
        />
      </div>
    </div>
  );
};

export default IconAndNamePicker;
