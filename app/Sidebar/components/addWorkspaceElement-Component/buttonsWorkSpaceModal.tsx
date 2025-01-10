"use client";

import { Icons } from "@/icons/icons";
import React from "react";

const buttonsWorkSpaceModal = [
  {
    label: "List",
    icon: <Icons.ListPlusIcon className="text-[14px] text-gray-500" />,
  },
  {
    label: "Doc",
    icon: <Icons.DocAdd className="text-[14px] text-gray-500" />,
  },
  {
    label: "Form",
    icon: <Icons.From className="text-[14px] text-gray-500" />,
  },
  {
    label: "Whiteboard",
    icon: <Icons.WhiteboardIcon className="text-[14px] text-gray-500" />,
  },
  {
    label: "Folder",
    icon: <Icons.FolderPlus className="text-[14px] text-gray-500" />,
  },
  {
    label: "Sprint Folder",
    icon: <Icons.FolderShare className="text-[14px] text-gray-500" />,
  },
  {
    label: "From template",
    icon: <Icons.MagicWandIcon className="text-[14px] text-gray-500" />,
  },
  {
    label: "Import",
    icon: <Icons.Import className="text-[14px] text-gray-500" />,
  },
];

export default buttonsWorkSpaceModal;
