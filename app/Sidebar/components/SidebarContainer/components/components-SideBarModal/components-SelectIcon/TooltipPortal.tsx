import React from "react";
import ReactDOM from "react-dom";
import { Tooltip } from "../types"; // Importujemy typ Tooltip

export function TooltipPortal({ tooltip }: { tooltip: Tooltip }) {
  return ReactDOM.createPortal(
    <div
      className="absolute bg-black text-white text-xs rounded px-2 py-1"
      style={{
        top: tooltip.position.top, // Ustawiamy pozycję tooltipa na podstawie przekazanych danych
        left: tooltip.position.left, // Ustawiamy pozycję poziomą tooltipa
        transform: "translateX(-50%)", // Wyśrodkowanie tooltipa względem punktu left
        zIndex: 9999, // Zapewniamy, że tooltip będzie wyświetlany na wierzchu innych elementów
      }}
    >
      {tooltip.content} {/* Wyświetlamy zawartość tooltipa */}
    </div>,
    document.body // Renderowanie tooltipa w elemencie body, co pozwala na jego wyświetlanie poza struktura komponentu
  );
}
