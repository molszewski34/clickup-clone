import React from "react";

export function IconList({
  icons,
  activeIcon,
  activeColor,
  onIconClick,
  onTooltipShow,
  onTooltipHide,
}: {
  icons: [string, React.ComponentType<{ className?: string }>][]; // Lista ikon jako [nazwa, komponent]
  activeIcon: string;
  activeColor: string;
  onIconClick: (key: string) => void;
  onTooltipShow: (key: string, event: React.MouseEvent<HTMLElement>) => void;
  onTooltipHide: () => void;
}) {
  return (
    <div className="flex justify-start content-start flex-wrap px-[10px] pb-[10px] mt-[5px] max-h-[113px]">
      <ul className="flex flex-wrap">
        {icons.map(([key, Icon], index) => {
          const isActive = activeIcon === key;
          return (
            <li
              key={index}
              className="relative group"
              onMouseEnter={(e) => onTooltipShow(key, e)}
              onMouseLeave={onTooltipHide}
            >
              <button
                onClick={() => onIconClick(key)}
                className={`flex items-center justify-center relative w-[29px] h-[29px] mr-[1px] rounded-md cursor-pointer border-none ${
                  isActive
                    ? `bg-${activeColor} text-white`
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                <Icon
                  className={`text-[14px] ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
