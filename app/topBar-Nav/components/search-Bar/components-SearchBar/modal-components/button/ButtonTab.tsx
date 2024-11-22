"use client";

export default function ButtonTab() {
  return (
    <>
      <button className="flex justify-center items-center bg-white border hover:bg-gray-100 border-gray-200  opacity-90 rounded-md flow-hidden h-[32px] w-auto px-3">
        <div className=" text-sm font-medium font-sans text-gray-700 ">Tab</div>
        <svg
          className="fill-gray-700 ml-2"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          height="14px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M25.218 15.838c-0.007-0.058-0.018-0.109-0.031-0.159l0.002 0.008c-0.051-0.223-0.158-0.416-0.305-0.571l0 0.001-5-5c-0.226-0.227-0.539-0.367-0.885-0.367-0.691 0-1.251 0.56-1.251 1.251 0 0.345 0.14 0.658 0.366 0.884v0l2.867 2.866h-18.982c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h18.981l-2.866 2.865c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.691 0.56 1.251 1.251 1.251 0.345 0 0.658-0.14 0.884-0.366l5-5.001c0.012-0.012 0.016-0.029 0.027-0.041 0.099-0.103 0.18-0.223 0.239-0.356l0.003-0.008 0-0.003c0.051-0.13 0.080-0.28 0.080-0.437 0-0.071-0.006-0.141-0.017-0.208l0.001 0.007zM30 0.75c-0.69 0-1.25 0.56-1.25 1.25v28c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-28c-0-0.69-0.56-1.25-1.25-1.25h-0z"></path>{" "}
          </g>
        </svg>
      </button>
    </>
  );
}
