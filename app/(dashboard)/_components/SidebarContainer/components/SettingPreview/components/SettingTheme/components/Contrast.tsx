const Contrast: React.FC = () => {
  return (
    <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="font-sans text-sm/snug font-medium text-gray-900">
          Contrast
        </h2>
        <p className="font-sans text-xs/6 text-gray-500">
          Turn on and off high contrast text and borders.
        </p>
      </div>
      <div className="block">
        <label className="flex h-full items-center gap-3 cursor-pointer group">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <div className="flex-col ">
            <p className="font-sans text-sm/snug text-gray-600">
              High Contrast for increased accessibility
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Contrast;
