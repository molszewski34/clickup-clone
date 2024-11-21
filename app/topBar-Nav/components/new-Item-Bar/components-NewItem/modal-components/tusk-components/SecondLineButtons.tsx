export default function SecondLineButtons() {
  return (
    <>
      <div className="flex items-center px-6 gap-2 mb-6">
        {/* TO DO Button */}
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 bg-gray-200 px-[7px] py-[3px]">
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            TO DO
          </div>
        </button>

        {/* Assignee Button */}
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-500 mr-1"
            width="12px"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                className="fill-gray-500"
                d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
              ></path>
              <path
                className="fill-gray-500"
                d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
              ></path>
            </g>
          </svg>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Assignee
          </div>
        </button>

        {/* Due Date Button */}
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-500 mr-1"
            width="12px"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                className="fill-gray-500"
                d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
              ></path>
              <path
                className="fill-gray-500"
                d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
              ></path>
            </g>
          </svg>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Due date
          </div>
        </button>

        {/* Priority Button */}
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-500 mr-1"
            width="12px"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                className="fill-gray-500"
                d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
              ></path>
              <path
                className="fill-gray-500"
                d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
              ></path>
            </g>
          </svg>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Priority
          </div>
        </button>

        {/* Tags Button */}
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-500 mr-1"
            width="12px"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                className="fill-gray-500"
                d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
              ></path>
              <path
                className="fill-gray-500"
                d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
              ></path>
            </g>
          </svg>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Tags
          </div>
        </button>
      </div>
    </>
  );
}
