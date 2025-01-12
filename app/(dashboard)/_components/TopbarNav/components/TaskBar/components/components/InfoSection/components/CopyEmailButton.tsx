import React, { useState } from "react";
import { CopyEmailButtonProps } from "@/app/(dashboard)/_components/TopbarNav/components/type";
import { Icons } from "@/icons/icons";
import Skeleton from "react-loading-skeleton";

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email,
  loading,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      },
      () => {
        setCopySuccess(false);
      }
    );
  };

  return (
    <div className="flex w-full gap-1 items-center justify-start rounded-md hover:bg-gray-100 group p-1 pl-2">
      <div className="text-xs font-sans text-gray-600 font-medium truncate overflow-hidden text-ellipsis whitespace-nowrap">
        {copySuccess ? (
          <span className="text-green-500">Copied!</span>
        ) : loading ? (
          <Skeleton />
        ) : (
          email
        )}
      </div>
      <button onClick={handleCopyEmail}>
        <Icons.ArrowDownIcon className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100" />
      </button>
    </div>
  );
};
