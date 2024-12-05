import React from "react";

export function IconList({
  icons, // Tablica ikon: [nazwa, komponent]
  activeIcon, // Nazwa aktywnej ikony
  activeColor, // Kolor tła dla aktywnej ikony
  onIconClick, // Funkcja po kliknięciu ikony
  onTooltipShow, // Funkcja pokazująca tooltip
  onTooltipHide, // Funkcja ukrywająca tooltip
}: {
  icons: [string, React.ComponentType<{ className?: string }>][];
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
          const isActive = activeIcon === key; // Sprawdza, czy ikona jest aktywna
          return (
            <li
              key={index}
              className="relative group"
              onMouseEnter={(e) => onTooltipShow(key, e)} // Pokazuje tooltip
              onMouseLeave={onTooltipHide} // Ukrywa tooltip
            >
              <button
                onClick={() => onIconClick(key)} // Kliknięcie ikony
                className={`flex items-center justify-center relative w-[29px] h-[29px] mr-[1px] rounded-md cursor-pointer border-none ${
                  isActive
                    ? `bg-${activeColor} text-white` // Aktywna ikona
                    : "bg-white hover:bg-gray-200" // Nieaktywna ikona
                }`}
              >
                <Icon
                  className={`text-[14px] ${
                    isActive ? "text-white" : "text-gray-500" // Kolor ikony zależny od aktywności
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
