import React from "react";

const ShareButton = () => {
  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).catch((error) => {
      console.error("Błąd kopiowania do schowka: ", error);
    });
  };

  return (
    <button
      onClick={handleShareClick}
      className="flex justify-center items-center h-8 px-3 rounded-lg bg-indigo-600 text-sm text-white font-semibold ml-2"
    >
      Share
    </button>
  );
};

export default ShareButton;
