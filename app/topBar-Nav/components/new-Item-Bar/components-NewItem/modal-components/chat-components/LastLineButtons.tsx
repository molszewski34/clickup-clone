export default function LastLineButtons() {
  return (
    <>
      <div className="flex">
        <div className="flex gap-2 w-full p-4 pl-6">
          <label className="inline-flex items-center group cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm text-gray-900 dark:text-gray-300 font-sans">
              Private
            </span>
          </label>
        </div>
        <div className="flex justify-end gap-2 w-full p-4 pl-6">
          <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-500"
            >
              <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
          </button>
          <div className="flex min-w-fit items-center h-8">
            <button className="px-[11px] rounded-md bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto">
              Create Reminder
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
