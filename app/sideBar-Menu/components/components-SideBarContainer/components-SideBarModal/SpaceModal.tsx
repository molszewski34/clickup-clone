"use client";

import IconClose from "@/app/topBar-Nav/components/icon/IconClose";
import { ModalProps } from "@/app/topBar-Nav/components/type";

export default function SpaceModal({ onClose }: ModalProps) {
  return (
    <>
      <div className="flex relative items-center justify-between p-6 pb-[13px]">
        <div className="flex-row">
          <h2 className="text-gray-900 font-semibold text-lg font-sans">
            Create a space
          </h2>
          <p className="w-11/12 text-gray-500 text-sm/6 font-sans">
            A Space represents teams, departments, or groups, each with its own
            Lists, workflows, and settings.
          </p>
          <div className=" mt-5">
            <h3 className=" text-gray-600 font-medium text-sm/6 font-sans">
              Icon & name
            </h3>
            <div className="flex items-center w-full gap-3 mt-2">
              <button className="flex min-w-[34px] min-h-[34px] items-center justify-center rounded-lg  border border-gray-200 font-sans text-gray-400 font-semibold">
                M
              </button>
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. Marketing, Engineering, HR"
                className="w-full border border-gray-200 px-[10px] py-3 text-sm/[14px] font-sans rounded-lg"
              />
            </div>
          </div>
          <div className=" flex-row mt-8">
            <div className="flex w-full items-center gap-1 mb-2">
              <span className=" text-gray-600 font-medium text-sm/6 font-sans">
                Description
              </span>
              <span className=" text-gray-500 text-xs/3 font-sans">
                &#40;optional&#41;
              </span>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder=""
              className="w-full border border-gray-200 px-[10px] py-3 text-sm/[14px] font-sans rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-8 mb-2">
            <div className="flex-row">
              <div>
                <p className=" text-gray-600 font-medium text-sm/4 font-sans">
                  Make Private
                </p>
                <p className="text-gray-500 text-sm/4 font-sans mt-1">
                  Only you and invited members have access
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer group">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-[36px] h-[22px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[16px] rtl:peer-checked:after:-translate-x-[2px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        <button
          className="absolute flex justify-center items-center p-[6px] top-4 right-4 rounded-lg hover:bg-gray-100"
          onClick={onClose}
        >
          <IconClose size="16" color="gray-400" />
        </button>
      </div>
      <div className="w-full h-px bg-gray-200" />
      <div className="flex justify-between p-4">
        <button className=" rounded-md hover:bg-gray-200 px-[11px] h-8 text-gray-500 font-sans text-sm font-medium">
          Use Templates
        </button>
        <button className="rounded-md bg-blue-500 text-white px-[11px] font-medium text-sm h-8 font-sans">
          Continue
        </button>
      </div>
    </>
  );
}
