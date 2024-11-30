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
