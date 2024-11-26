import React, { useState } from "react";
import IconArrowDownStatic from "@/app/topBar-Nav/components/icon/IconArrowDownStatic";
import { CopyEmailButtonProps } from "@/app/topBar-Nav/components/type";

// CopyEmailButton component for displaying email and copying it to the clipboard
export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email, // Email to display and copy
  loading, // Loading state that can be shown while the email is being fetched
}) => {
  // State to track whether the email has been copied successfully
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to handle copying the email to the clipboard
  const handleCopyEmail = () => {
    // Attempt to copy the email text to the clipboard
    navigator.clipboard.writeText(email).then(
      () => {
        // If successful, show the "Copied!" message for 2 seconds
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
      },
      () => {
        // If failed, hide the success message
        setCopySuccess(false);
      }
    );
  };

  return (
    <div className="flex w-full gap-1 items-center justify-start rounded-md hover:bg-gray-100 group p-1 pl-2">
      {/* Display the email, loading state, or "Copied!" message */}
      <div className="text-xs font-sans text-gray-600 font-medium truncate overflow-hidden text-ellipsis whitespace-nowrap">
        {copySuccess ? (
          // If email was copied successfully, show "Copied!"
          <span className="text-green-500">Copied!</span>
        ) : loading ? (
          // If still loading, show a question mark
          "?"
        ) : (
          // Otherwise, show the email
          email
        )}
      </div>
      <button onClick={handleCopyEmail}>
        {/* Icon to trigger the copy email function */}
        <IconArrowDownStatic
          size="10"
          color="gray-400"
          classN="opacity-0 group-hover:opacity-100"
        />
      </button>
    </div>
  );
};
