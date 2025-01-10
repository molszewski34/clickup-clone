const ContainerModalFavouritesButton = () => {
  return (
    <div className="flex-row">
      <div className="flex items-center h-8 pt-[6px]">
        <button
          className={`flex gap-1 items-center justify-center rounded-md my-1 ml-2 pl-2 pr-1 h-6 `}
        >
          <div className="flex items-center text-ms font-sans font-medium text-gray-500">
            Favorites
          </div>
        </button>
      </div>
      <div className="py-1 px-4 h-4 w-full text-xs font-sans font-medium text-gray-500">
        Click &#9734; to add favorites to your sidebar.
        <span className="ml-1 underline">Learn more</span>
      </div>
    </div>
  );
};

export default ContainerModalFavouritesButton;
