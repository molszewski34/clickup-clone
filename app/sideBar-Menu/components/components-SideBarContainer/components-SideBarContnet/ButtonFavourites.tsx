import { Icons } from "@/icons/icons";
import { useState } from "react";

const ButtonFavourites = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex-row">
      <div className="flex items-center h-8 pt-[6px]">
        <button
          onClick={handleButtonClick}
          className={`flex gap-1 items-center justify-center rounded-md hover:bg-gray-200 my-1 ml-2 pl-2 pr-1 h-6 `}
        >
          <div className="flex items-center text-xs font-sans font-medium text-gray-500">
            Favorites
          </div>
          <Icons.ArrowDownIcon
            className={`text-[12px] text-gray-400 transform transition-all duration-100 ${
              isClicked ? "rotate-0 " : "-rotate-90"
            }`}
          />
        </button>
      </div>

      {isClicked && (
        <div className="py-1 px-4 h-4 w-full text-xs font-sans font-medium text-gray-500">
          Click &#9734; to add favorites to your sidebar. Learn more
        </div>
      )}
    </div>
  );
};

export default ButtonFavourites;
