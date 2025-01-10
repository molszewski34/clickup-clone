"use client";

import React from "react";

interface ResizeHandleProps {
  width: number;
  onMouseDown: () => void;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ width, onMouseDown }) => {
  return (
    <div
      onMouseDown={onMouseDown}
      className="absolute top-0 h-full"
      style={{
        left: `${width - 5}px`,
        width: "5px",
        cursor: "col-resize",
        backgroundColor: "transparent",
      }}
    ></div>
  );
};

export default ResizeHandle;
