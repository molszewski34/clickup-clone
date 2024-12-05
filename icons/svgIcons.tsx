import React from "react";

export const SvgIcons = {
  Board: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10 5 45 85"
      stroke="currentColor"
      fill="none"
      strokeWidth="7"
      width="1em"
      height="1em"
      className={className}
    >
      {/* Left column */}
      <path
        d="
    M10 10 
    h20 
    v65 
    a10 10 0 0 1 -10 10 
    h-15 
    a10 10 0 0 1 -10 -10 
    v-55
    a10 10 0 0 1 10 -10 
    z"
      />

      {/* Right column */}
      <path
        d="
    M30 10 
    h22 
    a10 10 0 0 1 10 10 
    v40 
    a10 10 0 0 1 -10 10 
    h-22 
    z"
      />
    </svg>
  ),
  Table: ({ className }: React.SVGProps<SVGAElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="5 5 95 95"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      className={className}
    >
      {/* Table frame */}
      <rect x="10" y="10" width="80" height="80" rx="10" ry="10" />
      {/* column line */}
      <line x1="36.67" y1="10" x2="36.67" y2="90" />
      {/* row lines */}
      <line x1="10" y1="36.67" x2="90" y2="36.67" />
      <line x1="10" y1="63.33" x2="90" y2="63.33" />
    </svg>
  ),
  HorizontalChart: ({ className }: React.SVGProps<SVGAElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="5 5 95 95"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      className={className}
    >
      <line x1="10" y1="10" x2="45" y2="10" />
      <line x1="10" y1="33.3" x2="80" y2="33.3" />
      <line x1="10" y1="56.6" x2="55" y2="56.6" />
      <line x1="10" y1="80" x2="90" y2="80" />
    </svg>
  ),
  SlidersHorizontal: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="5 5 95 95"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="8"
      className={className}
    >
      {/* zip 1 */}
      <line x1="28" y1="25" x2="90" y2="25" />
      <circle cx="18" cy="25" r="8" fill="none" />

      {/* zip 2 */}
      <line x1="10" y1="50" x2="60" y2="50" />
      <circle cx="70" cy="50" r="8" fill="none" />
      <line x1="80" y1="50" x2="90" y2="50" />

      {/* zip 3 */}
      <line x1="10" y1="75" x2="30" y2="75" />
      <circle cx="40" cy="75" r="8" fill="none" />
      <line x1="50" y1="75" x2="90" y2="75" />
    </svg>
  ),
  Ai: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="currentColor" // Use LinearGradient
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
    >
      <defs>
        <linearGradient
          id="custom-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#0880EA", stopOpacity: 1 }} />
          <stop offset="39%" style={{ stopColor: "#8920FE", stopOpacity: 1 }} />
          <stop offset="72%" style={{ stopColor: "#E93D82", stopOpacity: 1 }} />
          <stop offset="92%" style={{ stopColor: "#C62AB6", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M26.617 16c2.332-2.762 3.246-5.488 2.157-7.375s-3.907-2.459-7.465-1.821c-1.226-3.4-3.129-5.554-5.308-5.554-2.184 0-4.090 2.164-5.316 5.576-0.348-0.063-0.711-0.155-1.047-0.195-3.17-0.374-5.449 0.33-6.41 1.994s-0.436 3.99 1.479 6.549c0.207 0.277 0.473 0.55 0.707 0.826-0.234 0.276-0.5 0.549-0.707 0.826-1.915 2.559-2.439 4.885-1.479 6.549 0.955 1.298 2.477 2.132 4.194 2.132 0.221 0 0.438-0.014 0.652-0.040l-0.025 0.003c0.563-0.002 1.114-0.038 1.656-0.106l-0.066 0.007c0.336-0.040 0.699-0.133 1.047-0.196 1.226 3.413 3.132 5.577 5.316 5.577 2.179 0 4.082-2.154 5.308-5.553 0.78 0.153 1.682 0.246 2.603 0.254l0.007 0c0.192 0.025 0.413 0.039 0.638 0.039 1.721 0 3.249-0.825 4.21-2.102l0.010-0.013c1.089-1.887 0.173-4.613-2.159-7.375zM23.938 8.053c1.773 0 3.043 0.464 3.537 1.322 0.677 1.172-0.046 3.232-1.901 5.489-0.927-0.933-1.921-1.796-2.976-2.582l-0.070-0.050c-0.173-1.506-0.441-2.857-0.808-4.167l0.044 0.185c0.65-0.119 1.401-0.19 2.168-0.197l0.006-0zM18.625 20.545c-0.875 0.506-1.756 0.949-2.634 1.352-0.855-0.392-1.729-0.839-2.616-1.352-0.875-0.505-1.699-1.046-2.487-1.605-0.088-0.936-0.138-1.916-0.138-2.94s0.050-2.005 0.138-2.941c0.787-0.559 1.612-1.101 2.487-1.606 0.89-0.514 1.766-0.955 2.623-1.348 0.876 0.402 1.754 0.844 2.627 1.348 0.892 0.515 1.716 1.053 2.486 1.601 0.089 0.938 0.139 1.92 0.139 2.946s-0.050 2.008-0.139 2.945c-0.77 0.548-1.594 1.085-2.486 1.6zM20.847 20.941c-0.165 0.996-0.358 1.838-0.594 2.661l0.041-0.165c-1.005-0.258-1.828-0.525-2.629-0.835l0.16 0.054c0.518-0.264 1.037-0.514 1.551-0.81 0.508-0.293 0.996-0.597 1.472-0.905zM14.14 22.67c-0.629 0.252-1.439 0.517-2.267 0.739l-0.165 0.037c-0.2-0.671-0.395-1.528-0.542-2.4l-0.019-0.138c0.488 0.317 0.963 0.641 1.477 0.938q0.759 0.438 1.515 0.824zM9.298 17.727c-0.689-0.564-1.308-1.128-1.896-1.724l-0.003-0.003c0.59-0.598 1.209-1.163 1.857-1.694l0.042-0.033c-0.029 0.566-0.048 1.141-0.048 1.727s0.019 1.16 0.048 1.727zM12.625 10.154c-0.514 0.297-0.99 0.621-1.477 0.938 0.166-1.010 0.362-1.867 0.602-2.704l-0.041 0.166c0.994 0.26 1.805 0.526 2.596 0.833l-0.161-0.055c-0.505 0.258-1.012 0.529-1.519 0.822zM17.816 9.34c0.645-0.255 1.471-0.52 2.316-0.739l0.162-0.036c0.196 0.657 0.388 1.499 0.534 2.356l0.019 0.138c-0.476-0.308-0.964-0.612-1.472-0.905-0.516-0.298-1.038-0.549-1.559-0.815zM22.703 14.287c0.68 0.559 1.292 1.119 1.872 1.71l0.003 0.003c-0.584 0.594-1.195 1.153-1.835 1.68l-0.040 0.032c0.029-0.562 0.047-1.131 0.047-1.712s-0.018-1.151-0.047-1.713zM16 2.75c1.357 0 2.796 1.634 3.825 4.383-1.506 0.399-2.787 0.857-4.017 1.406l0.167-0.067c-1.045-0.477-2.308-0.934-3.611-1.295l-0.188-0.044c1.029-2.749 2.468-4.383 3.825-4.383zM4.525 9.375c0.715-0.848 1.778-1.383 2.966-1.383 0.194 0 0.385 0.014 0.571 0.042l-0.021-0.003c0.502 0.002 0.994 0.034 1.477 0.095l-0.059-0.006c0.248 0.030 0.518 0.102 0.773 0.145-0.323 1.128-0.591 2.483-0.751 3.871l-0.011 0.122c-1.128 0.833-2.124 1.689-3.053 2.614l0.001-0.001c-0.165-0.199-0.362-0.397-0.511-0.596-1.511-2.019-2.014-3.805-1.381-4.9zM9.459 23.879c-2.501 0.297-4.302-0.16-4.934-1.254-0.633-1.096-0.13-2.881 1.381-4.9 0.149-0.199 0.346-0.397 0.511-0.596 0.928 0.923 1.924 1.78 2.979 2.561l0.073 0.051c0.171 1.51 0.439 2.865 0.807 4.178l-0.044-0.185c-0.255 0.043-0.525 0.115-0.772 0.145zM16 29.25c-1.357 0-2.796-1.634-3.825-4.383 1.49-0.406 2.752-0.862 3.967-1.407l-0.17 0.068c1.064 0.483 2.345 0.94 3.668 1.298l0.184 0.042c-1.029 2.749-2.468 4.383-3.824 4.383zM27.477 22.625c-0.679 1.177-2.815 1.606-5.711 1.121 0.322-1.123 0.59-2.473 0.751-3.855l0.012-0.123c1.125-0.836 2.12-1.699 3.045-2.631l0.002-0.002c1.854 2.257 2.578 4.317 1.902 5.489zM16 13.25c-1.519 0-2.75 1.231-2.75 2.75s1.231 2.75 2.75 2.75c1.519 0 2.75-1.231 2.75-2.75v0c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM16 17.25c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25v0c-0.001 0.69-0.56 1.249-1.25 1.25h-0z"></path>{" "}
      </g>
    </svg>
  ),
  Alarm: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 327.508 327.508"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
      transform="matrix(-1, 0, 0, 1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            fill="currentColor"
            d="M163.175,26.903c-77.98,0-141.416,63.436-141.416,141.416c0,28.816,8.681,55.631,23.54,78.007 l-24.307,48.457c-4.716,9.399-0.919,20.837,8.48,25.547c2.741,1.376,5.651,2.029,8.518,2.029c6.973,0,13.696-3.845,17.03-10.508 l17.579-35.038c24.552,20.532,56.142,32.917,90.582,32.917c32.667,0,62.756-11.161,86.726-29.833l16.029,31.954 c3.334,6.663,10.057,10.508,17.03,10.508c2.866,0,5.776-0.653,8.518-2.029c9.399-4.71,13.195-16.154,8.479-25.547l-22.045-43.942 c16.763-23.241,26.679-51.736,26.679-82.521C304.59,90.339,241.155,26.903,163.175,26.903z M163.175,271.661 c-56.985,0-103.342-46.357-103.342-103.342S106.19,64.976,163.175,64.976s103.342,46.357,103.342,103.342 S220.16,271.661,163.175,271.661z"
          ></path>
          <path
            fill="currentColor"
            d="M163.175,115.625c-6.005,0-10.878,4.873-10.878,10.878v41.239l-43.91,51.66 c-3.894,4.574-3.334,11.444,1.246,15.327c2.045,1.74,4.547,2.594,7.038,2.594c3.079,0,6.141-1.3,8.289-3.835l45.144-53.112 c2.393-1.996,3.949-4.96,3.949-8.322v-45.552C174.053,120.498,169.185,115.625,163.175,115.625z"
          ></path>
          <path
            fill="currentColor"
            d="M93.625,21.214c-21.419-21.419-56.142-21.419-77.561,0s-21.419,56.142,0,77.561L93.625,21.214z"
          ></path>
          <path
            fill="currentColor"
            d="M311.444,21.214c-21.419-21.419-56.142-21.419-77.561,0l77.561,77.561 C332.863,77.356,332.863,42.627,311.444,21.214z"
          ></path>
        </g>
      </g>
    </svg>
  ),
  Apps: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
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
  ),
  Comment: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={`${className} -scale-x-100`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.663 3.04094 17.0829 4.73812 18.875L2.72681 21.1705C2.44361 21.4937 2.67314 22 3.10288 22H12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 9H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 13H11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  CreateDoc: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
    >
      <path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 34.1523 10.1992 L 34.1523 45.8008 Z M 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 L 37.8319 45.8008 L 37.8319 10.1992 Z M 42.3319 18.8945 L 47.3478 18.8945 C 48.0740 18.8945 48.6836 18.2617 48.6836 17.5820 C 48.6836 16.8789 48.0740 16.2696 47.3478 16.2696 L 42.3319 16.2696 C 41.6288 16.2696 40.9960 16.8789 40.9960 17.5820 C 40.9960 18.2617 41.6288 18.8945 42.3319 18.8945 Z M 42.3319 24.9649 L 47.3478 24.9649 C 48.0740 24.9649 48.6836 24.3320 48.6836 23.6289 C 48.6836 22.9258 48.0740 22.3398 47.3478 22.3398 L 42.3319 22.3398 C 41.6288 22.3398 40.9960 22.9258 40.9960 23.6289 C 40.9960 24.3320 41.6288 24.9649 42.3319 24.9649 Z M 42.3319 31.0118 L 47.3478 31.0118 C 48.0740 31.0118 48.6836 30.4258 48.6836 29.7227 C 48.6836 29.0196 48.0740 28.4102 47.3478 28.4102 L 42.3319 28.4102 C 41.6288 28.4102 40.9960 29.0196 40.9960 29.7227 C 40.9960 30.4258 41.6288 31.0118 42.3319 31.0118 Z"></path>
    </svg>
  ),
  Doc: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
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
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <line
                  stroke="currentColor"
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
                  stroke="currentColor"
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
                  stroke="currentColor"
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
  ),
  DocMenu: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      width="1em"
      height="1em"
      className={className}
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
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="7.9"
                  x2="16.1"
                  y1="17.5"
                  y2="17.5"
                ></line>
                <line
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="7.9"
                  x2="16.1"
                  y1="13.5"
                  y2="13.5"
                ></line>
                <line
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
  ),
  Dot: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="currentColor"
          d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        ></path>
        <path
          fill="currentColor"
          d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
        ></path>
      </g>
    </svg>
  ),
  Home: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1em"
      height="1em"
      className={className}
    >
      {/* w-[${size}px] h-[${size}px] */}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g fill="none" fillRule="evenodd">
          <path d="m0 0h32v32h-32z"></path>
          <path
            d="m7 32c-3.3137085 0-6-2.6862915-6-6v-11.958697c0-1.9117507.91103125-3.7090683 2.45293825-4.83925127l9.00556125-6.60087271c2.1123042-1.54827125 4.9847775-1.54760604 7.0963644.00164338l8.9944388 6.59912643c1.5405939 1.13031777 2.4506973 2.92683637 2.4506973 4.83760787v11.9604433c0 3.3137085-2.6862915 6-6 6zm6.8273226-27.91451343-.1864692.12877621-9.00556124 6.60087272c-.96747105.7091344-1.56238342 1.8122399-1.62902546 3.0021226l-.0062667.2240449v11.958697c0 2.1421954 1.68396847 3.8910789 3.80035966 3.9951047l.19964034.0048953 4-.0005697v-4.9994303c0-2.7614237 2.2385763-5 5-5s5 2.2385763 5 5v4.9994303l4 .0005697c2.1421954 0 3.8910789-1.6839685 3.9951047-3.8003597l.0048953-.1996403v-11.9604433c0-1.1989154-.5374544-2.3303598-1.456953-3.0875579l-.1768452-.137514-8.9944388-6.59912644c-1.3465192-.98792716-3.1571455-1.03128627-4.5444404-.12987179zm2.1726774 17.91451343c-1.5976809 0-2.9036609 1.24892-2.9949073 2.8237272l-.0050927.1762728v5h6v-5c0-1.5976809-1.24892-2.9036609-2.8237272-2.9949073z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </svg>
  ),
  Inbox: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M3 12H7.26393C8.02148 12 8.714 12.428 9.05279 13.1056L9.44721 13.8944C9.786 14.572 10.4785 15 11.2361 15H12.9296C13.5983 15 14.2228 14.6658 14.5937 14.1094L15.4063 12.8906C15.7772 12.3342 16.4017 12 17.0704 12H21M3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V12M3 12L5.51334 5.29775C5.80607 4.51715 6.55231 4 7.386 4H16.614C17.4477 4 18.1939 4.51715 18.4867 5.29775L21 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  ),
  NotePad: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="-5 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-261.000000, -99.000000)" fill="currentColor">
            <path d="M281,127 C281,128.104 280.104,129 279,129 L265,129 C263.896,129 263,128.104 263,127 L263,105 C263,103.896 263.896,103 265,103 L279,103 C280.104,103 281,103.896 281,105 L281,127 L281,127 Z M279,101 L279,99 L277,99 L277,101 L273,101 L273,99 L271,99 L271,101 L267,101 L267,99 L265,99 L265,101 C262.791,101 261,102.791 261,105 L261,127 C261,129.209 262.791,131 265,131 L279,131 C281.209,131 283,129.209 283,127 L283,105 C283,102.791 281.209,101 279,101 L279,101 Z M278,109 L266,109 C265.448,109 265,109.448 265,110 C265,110.553 265.448,111 266,111 L278,111 C278.552,111 279,110.553 279,110 C279,109.448 278.552,109 278,109 L278,109 Z M278,121 L266,121 C265.448,121 265,121.447 265,122 C265,122.553 265.448,123 266,123 L278,123 C278.552,123 279,122.553 279,122 C279,121.447 278.552,121 278,121 L278,121 Z M278,115 L266,115 C265.448,115 265,115.448 265,116 C265,116.553 265.448,117 266,117 L278,117 C278.552,117 279,116.553 279,116 C279,115.448 278.552,115 278,115 L278,115 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  Ringing: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="icomoon-ignore"> </g>
        <path
          d="M25.074 21.375v-8.568c0-4.462-3.229-8.162-7.474-8.915v-0.681c0-0.589-0.478-1.066-1.066-1.066h-1.066c-0.589 0-1.066 0.477-1.066 1.066v0.684c-4.237 0.761-7.453 4.458-7.453 8.912v8.568l-3.742 3.029v1.729h25.59v-1.729l-3.721-3.029zM27.729 25.066h-23.457v-0.154l3.742-3.029v-9.077c0-4.41 3.587-7.997 7.997-7.997 4.409 0 7.997 3.587 7.997 7.997v9.075l3.721 3.029v0.155z"
          fill="currentColor"
        ></path>
        <path
          d="M15.999 29.856c1.473 0 2.669-1.192 2.669-2.666h-5.335c0.001 1.473 1.195 2.666 2.667 2.666z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  ),
  Sort: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
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
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
        <path
          d="M18 7L6 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
        <path
          d="M10 17L14 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  ),
  StopWatch: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle
          cx="12"
          cy="13"
          r="9"
          stroke="currentColor"
          strokeWidth="1.25"
        ></circle>
        <path
          d="M10 2H14"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        ></path>
        <path
          d="M13.8876 10.9348C14.9625 11.8117 15.5 12.2501 15.5 13C15.5 13.7499 14.9625 14.1883 13.8876 15.0652C13.5909 15.3073 13.2966 15.5352 13.0261 15.7251C12.7888 15.8917 12.5201 16.064 12.2419 16.2332C11.1695 16.8853 10.6333 17.2114 10.1524 16.8504C9.6715 16.4894 9.62779 15.7336 9.54038 14.2222C9.51566 13.7947 9.5 13.3757 9.5 13C9.5 12.6243 9.51566 12.2053 9.54038 11.7778C9.62779 10.2664 9.6715 9.51061 10.1524 9.1496C10.6333 8.78859 11.1695 9.11466 12.2419 9.76679C12.5201 9.93597 12.7888 10.1083 13.0261 10.2749C13.2966 10.4648 13.5909 10.6927 13.8876 10.9348Z"
          stroke="currentColor"
          strokeWidth="1.25"
        ></path>
      </g>
    </svg>
  ),
  Whiteboard: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="File / Note_Edit">
          <path
            id="Vector"
            d="M10.0002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V14M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  ),
  Tab: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
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
  ),
  NewTab: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
    >
      <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
    </svg>
  ),
  Enter: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="currentColor"
          d="M19.3001469,0 C19.6866651,0 20,0.313300846 20,0.699777025 L20,8.97782758 C20,12.6769567 17.0009372,15.6756934 13.3014059,15.6756934 L2.305,15.675 L5.43624386,18.8055827 C5.70952379,19.0788626 5.7094997,19.521961 5.43619005,19.7952707 C5.16288041,20.0685803 4.71978201,20.0686044 4.44650209,19.7953245 L0.205212835,15.5540352 C-0.0680670919,15.2807553 -0.0680430016,14.8376569 0.205266642,14.5643472 L4.4470171,10.3225968 C4.72032674,10.0492871 5.16342514,10.0492631 5.43670506,10.322543 C5.70998499,10.5958229 5.7099609,11.0389213 5.43665126,11.3122309 L2.472,14.276 L13.3014059,14.2761393 C16.2279008,14.2761393 18.6002938,11.9040044 18.6002938,8.97782758 L18.6002938,0.699777025 C18.6002938,0.313300846 18.9136287,0 19.3001469,0 Z"
        ></path>
      </g>
    </svg>
  ),
  Attach: ({ className }: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M22.0545 5.94619C24.2785 8.17032 24.2785 11.7763 22.0545 14.0005L20.6067 15.4483C20.2943 15.7608 20.2943 16.2673 20.6067 16.5797L21.0862 17.0592C21.3986 17.3716 21.9051 17.3716 22.2175 17.0592L23.6653 15.6113C26.7789 12.4976 26.7789 7.44912 23.6653 4.33534C20.5517 1.22155 15.5035 1.22155 12.3898 4.33534L10.942 5.78321C10.6296 6.09563 10.6296 6.60218 10.942 6.91461L11.4215 7.39406C11.7339 7.70649 12.2404 7.70649 12.5528 7.39407L14.0006 5.94619C16.2246 3.72206 19.8305 3.72206 22.0545 5.94619Z"
          fill="currentColor"
        ></path>
        <path
          d="M5.94601 22.0538C8.17004 24.278 11.7759 24.278 13.9999 22.0538L15.4477 20.606C15.7601 20.2935 16.2667 20.2935 16.5791 20.606L17.0585 21.0854C17.3709 21.3979 17.3709 21.9044 17.0585 22.2168L15.6107 23.6647C12.4971 26.7785 7.44886 26.7785 4.33523 23.6647C1.22159 20.5509 1.22159 15.5025 4.33523 12.3887L5.78303 10.9408C6.09544 10.6284 6.60197 10.6284 6.91438 10.9408L7.39382 11.4203C7.70623 11.7327 7.70623 12.2393 7.39382 12.5517L5.94601 13.9996C3.72198 16.2237 3.72198 19.8297 5.94601 22.0538Z"
          fill="currentColor"
        ></path>
        <path
          d="M17.8593 9.80361C17.5078 9.45213 16.938 9.45213 16.5865 9.80361L9.80535 16.5851C9.45389 16.9366 9.45389 17.5064 9.80535 17.8579L10.1434 18.1959C10.4948 18.5474 11.0647 18.5474 11.4161 18.1959L18.1973 11.4145C18.5487 11.063 18.5487 10.4931 18.1973 10.1416L17.8593 9.80361Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  ),
  TwoDotsWithArc: ({ className }: React.SVGProps<SVGAElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 25 35 60"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      className={className}
    >
      {/* left dot */}
      <circle cx="33" cy="40" r="8" />
      {/* rightr dot */}
      <circle cx="61" cy="71" r="8" />
      {/* Line */}
      <path d="M33 45 C30 65, 35 75, 55 70" />
    </svg>
  ),
};
