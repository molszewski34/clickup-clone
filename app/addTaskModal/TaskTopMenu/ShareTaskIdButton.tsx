"use client"; // ważne, aby użyć 'use client' w komponentach, które używają API przeglądarki

import { useParams } from "next/navigation";
import React from "react";

const ShareTaskIdButton = () => {
  const params = useParams();
  const taskId = params.taskId as string;

  const handleCopyToClipboard = () => {
    if (taskId) {
      navigator.clipboard.writeText(taskId).catch((error) => {
        console.error("Błąd podczas kopiowania: ", error);
      });
    }
  };

  return (
    <button
      className="flex items-center justify-center hover:bg-gray-100 px-[7px] py-[3px]"
      onClick={handleCopyToClipboard}
    >
      <div className="flex items-center text-xs font-sans font-medium text-gray-600">
        {taskId}
      </div>
    </button>
  );
};

export default ShareTaskIdButton;
