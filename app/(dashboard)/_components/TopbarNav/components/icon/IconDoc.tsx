export default function IconDoc({
  color = 'gray-700',
  size = '20',
}: {
  color?: string;
  size?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Complete">
          <g id="F-File">
            <g id="Text">
              <g>
                <path
                  d="M18,22H6a2,2,0,0,1-2-2V4A2,2,0,0,1,6,2h7.1a2,2,0,0,1,1.5.6l4.9,5.2A2,2,0,0,1,20,9.2V20A2,2,0,0,1,18,22Z"
                  className={`stroke-${color}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <line
                  className={`stroke-${color}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  x1="7.9"
                  x2="16.1"
                  y1="17.5"
                  y2="17.5"
                ></line>
                <line
                  className={`stroke-${color}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  x1="7.9"
                  x2="16.1"
                  y1="13.5"
                  y2="13.5"
                ></line>
                <line
                  className={`stroke-${color}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  x1="8"
                  x2="13"
                  y1="9.5"
                  y2="9.5"
                ></line>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
