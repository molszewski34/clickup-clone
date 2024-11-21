export default function LastLineButtons() {
  return (
    <>
      {/* Main container */}
      <div className="flex w-full p-4 pl-6">
        {/* Section for Templates and Notifications */}
        <div className="flex w-full justify-between">
          {/* Templates button with an icon */}
          <button className="flex items-center bg-white border border-gray-200 gap-1 hover:bg-gray-200 px-3 rounded-md flow-hidden h-[32px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-gray-600"
              height="12px"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
            <div className="w-auto text-gray-600 font-semibold text-sm/[16px] text-left font-sans">
              Templates
            </div>
          </button>

          {/* Notification buttons */}
          <div className="flex">
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

            {/* Notification with count */}
            <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-[45px] p-[7px] gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                height="14px"
                className="fill-gray-500"
              >
                <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
              </svg>
              <div className="min-w-[9px] text-gray-500 font-semibold text-sm/[16px] text-left font-sans">
                1
              </div>
            </button>
          </div>
        </div>

        {/* Section for Create Task button */}
        <div className="flex min-w-fit items-center h-8">
          {/* Create Task button */}
          <button className="px-[11px] rounded-l-md bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto">
            Create Task
          </button>

          {/* Divider between buttons */}
          <div className="h-full w-px bg-blue-700"></div>

          {/* Button with arrow icon */}
          <button className="flex justify-center items-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-white"
              width="12px"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
