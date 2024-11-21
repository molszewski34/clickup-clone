"use client";

export default function IconAI({ width = "16px", className = "" }) {
  return (
    <svg
      fill="url(#custom-gradient)" // Use LinearGradient
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`} // Dodanie klasy, aby można było dostosować style
      width={width} // Dynamiczna szerokość
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
  );
}
