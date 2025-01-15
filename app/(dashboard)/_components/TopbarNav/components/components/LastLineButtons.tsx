import React from "react";
import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

interface LastLineButtonsProps {
  checkboxLabel?: string;
  showCheckbox?: boolean;
  templatesButtonText?: string;
  showTemplatesButton?: boolean;
  showAttachmentButton?: boolean;
  showAttachmentButtonS?: boolean;
  showRingingButton?: boolean;
  ringingCount?: number;
  actionButtonText?: string;
  actionButtonSuffix?: boolean;
}

const LastLineButtons: React.FC<LastLineButtonsProps> = ({
  checkboxLabel = "",
  showCheckbox = false,
  templatesButtonText = "",
  showTemplatesButton = false,
  showAttachmentButton = false,
  showAttachmentButtonS = false,
  showRingingButton = false,
  ringingCount = null,
  actionButtonText = "",
  actionButtonSuffix = false,
}) => {
  return (
    <div className="flex w-full p-4 pl-6">
      <div className="flex w-full justify-between">
        {showCheckbox && (
          <label className="inline-flex items-center cursor-pointer group">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm text-gray-900  font-sans">
              {checkboxLabel}
            </span>
          </label>
        )}

        {showTemplatesButton && (
          <button className="flex items-center bg-white border border-gray-200 gap-1 hover:bg-gray-200 px-3 rounded-md flow-hidden h-[32px]">
            <Icons.MagicWandIcon className="text-[12px] text-gray-600 rotate-90 -scale-x-100" />
            <div className="w-auto text-gray-600 font-semibold text-sm/[16px] text-left font-sans">
              {templatesButtonText}
            </div>
          </button>
        )}

        <div className="flex">
          {showAttachmentButton && (
            <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8">
              <Icons.AttachmentIcon className="text-[18px] text-gray-500 -scale-x-100" />
            </button>
          )}

          {showRingingButton && (
            <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-[45px] p-[7px] gap-1">
              <Icon
                className="text-[18px] text-gray-500"
                icon={<Icons.RingingIcon />}
              />
              {ringingCount && (
                <div className="min-w-[9px] text-gray-500 font-semibold text-sm/[16px] text-left font-sans">
                  {ringingCount}
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="flex min-w-fit items-center h-8">
        {showAttachmentButtonS && (
          <button className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8 mr-1">
            <Icons.AttachmentIcon className="text-[18px] text-gray-500 -scale-x-100" />
          </button>
        )}
        <button
          className={`px-[11px] bg-blue-600 hover:bg-blue-700 font-sans text-sm/[16px] font-medium text-white h-8 w-auto ${
            actionButtonSuffix ? "rounded-l-md" : "rounded-md"
          }`}
        >
          {actionButtonText}
        </button>

        {actionButtonSuffix && (
          <>
            <div className="h-full w-px bg-blue-700"></div>
            <button className="flex justify-center items-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-r-md">
              <Icons.ArrowDownIcon className="text-[12px] text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LastLineButtons;
