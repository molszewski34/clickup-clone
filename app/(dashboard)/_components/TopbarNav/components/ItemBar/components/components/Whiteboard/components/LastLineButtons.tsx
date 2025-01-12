export default function LastLineButtons() {
  return (
    <>
      <div className="flex w-full p-4 pl-6">
        <div className="flex w-full justify-between">
          <label className="inline-flex items-center cursor-pointer group">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm text-gray-900 dark:text-gray-300 font-sans">
              Private
            </span>
          </label>
        </div>
        <div className="flex min-w-fit items-center h-8">
          <button className="px-[11px] rounded-md bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto">
            Create Whiteboard
          </button>
        </div>
      </div>
    </>
  );
}
