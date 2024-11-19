"use client";

export default function SortMenuModal() {
  return (
    <>
      <div className="flex items-center w-full p-2 pl-3 gap-[4px] h-[40px]">
        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-500"
            height="12px"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
          </svg>
          <div className=" flex items-center text-xs font-sans font-medium text-gray-600">
            Tasks
          </div>
        </button>

        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="fill-gray-500"
            height="12px"
          >
            <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
          </svg>
          <div className=" flex items-center text-xs font-sans font-medium text-gray-600">
            Docs
          </div>
        </button>

        <button className="flex justify-center h-6 w-6 items-center rounded-2xl border border-gray-200 border-dashed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-gray-400"
            height="12px"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
          </svg>
        </button>

        <div className="w-px h-4 m-1 bg-gray-200" />

        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className=" flex items-center text-xs font-sans font-medium text-gray-600">
            Sort
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-400 ml-[2px]"
            width="10px"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>

        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className=" flex items-center text-xs font-sans font-medium text-gray-600">
            Assignee
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-400 ml-[2px]"
            width="10px"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>

        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className=" flex items-center text-xs font-sans font-medium text-gray-600">
            Creator
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-400 ml-[2px]"
            width="10px"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>

        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className=" flex items-center text-xs font-sans font-medium text-gray-600">
            In
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-400 ml-[2px]"
            width="10px"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
        <button className=" flex gap-[2px] items-center  justify-center rounded-2xl border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16 12H8"
                className="stroke-gray-600"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M18 7L6 7"
                className="stroke-gray-600"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M10 17L14 17"
                className="stroke-gray-600"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}
