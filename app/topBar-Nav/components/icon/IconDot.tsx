export default function IconDot({
  fill = "gray-700",
  size = 20,
  classN = "",
}: {
  fill?: string;
  size?: number;
  classN?: string;
}) {
  return (
    <>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-${fill} ${classN}`}
        height={size}
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
            className={`fill-${fill}`}
            d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
          ></path>
          <path
            className={`fill-${fill}`}
            d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
          ></path>
        </g>
      </svg>
    </>
  );
}
