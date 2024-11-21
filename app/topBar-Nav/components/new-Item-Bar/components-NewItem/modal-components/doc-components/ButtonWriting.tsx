import IconAI from "@/app/topBar-Nav/components/icon/IconAI";

export default function ButtonWriting() {
  return (
    <>
      {/* Main container for buttons */}
      <div className="flex-row items-center w-auto mx-6 mb-4">
        {/* "Start writing" button */}
        <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
          {/* Button icon */}
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-400 group-hover:fill-gray-600"
            >
              <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
          </div>

          {/* Button text */}
          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Start writing
          </div>
        </button>

        {/* "Write with AI" button */}
        <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
          {/* Button icon */}
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <IconAI
              width="14"
              className="fill-[url(#custom-gradient)] opacity-50 group-hover:opacity-100"
            />
          </div>

          {/* Button text */}
          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Write with AI
          </div>
        </button>

        {/* Divider text "Add new" */}
        <div className="pl-1 py-2 pr-3 text-[11px] font-sans text-gray-400 font-semibold cursor-default">
          Add new
        </div>

        {/* "Table" button */}
        <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-400 group-hover:fill-gray-600"
            >
              <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
          </div>
          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Table
          </div>
        </button>

        {/* "Column" button */}
        <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
          <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="14px"
              className="fill-gray-400 group-hover:fill-gray-600"
            >
              <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
          </div>
          <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
            Column
          </div>
        </button>
      </div>
    </>
  );
}
