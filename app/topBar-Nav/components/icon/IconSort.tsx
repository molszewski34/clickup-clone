"use client";

export default function IconSort({ size = "16", color = "white" }) {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
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
            className={`stroke-${color}`}
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M18 7L6 7"
            className={`stroke-${color}`}
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M10 17L14 17"
            className={`stroke-${color}`}
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    </>
  );
}
