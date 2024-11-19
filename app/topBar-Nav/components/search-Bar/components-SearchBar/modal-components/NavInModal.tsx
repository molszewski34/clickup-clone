"use client";

export default function NavInModal() {
  return (
    <>
      {/* Navigation in modal */}
      <div className="flex items-center w-full px-3  gap-[7px] h-[39px]">
        <button className="flex items-center w-auto pt-2 pb-[7px] h-[39px] border-b-2 border-blue-500">
          <div className=" rounded-md hover:bg-gray-100 p-1 text-xs font-sans font-medium text-gray-600">
            All
          </div>
        </button>
        <button className="flex items-center w-auto p-1 pt-2 pb-[7px] h-[39px] group border-b-2 border-transparent  ">
          <div className=" flex items-center gap-1 rounded-md p-1 hover:bg-gray-100">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-gray-400 group-hover:fill-gray-700"
              height="14px"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  d="M16,16 L16,13 L18,13 L18,16 L21,16 L21,18 L18,18 L18,21 L16,21 L16,18 L13,18 L13,16 L16,16 Z M4,13 L9,13 C10.1045695,13 11,13.8954305 11,15 L11,20 C11,21.1045695 10.1045695,22 9,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,15 C2,13.8954305 2.8954305,13 4,13 Z M4,15 L4,20 L9,20 L9,15 L4,15 Z M4,2 L9,2 C10.1045695,2 11,2.8954305 11,4 L11,9 C11,10.1045695 10.1045695,11 9,11 L4,11 C2.8954305,11 2,10.1045695 2,9 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,9 L9,9 L9,4 L4,4 Z M15,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,9 C22,10.1045695 21.1045695,11 20,11 L15,11 C13.8954305,11 13,10.1045695 13,9 L13,4 C13,2.8954305 13.8954305,2 15,2 Z M15,4 L15,9 L20,9 L20,4 L15,4 Z"
                ></path>
              </g>
            </svg>
            <div className="text-xs font-sans font-medium text-gray-500">
              Apps
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
