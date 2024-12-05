import React from "react";
import ReactDOM from "react-dom";
import { Tooltip } from "../types";

export function TooltipPortal({ tooltip }: { tooltip: Tooltip }) {
  return ReactDOM.createPortal(
    <div
      className="absolute bg-black text-white text-xs rounded px-2 py-1"
      style={{
        top: tooltip.position.top,
        left: tooltip.position.left,
        transform: "translateX(-50%)",
        zIndex: 9999,
      }}
    >
      {tooltip.content}
    </div>,
    document.body
  );
}
