"use client";

import { Icons } from "@/icons/icons";
import React from "react";

const buttonsWorkSpaceModal = [
  {
    label: "List",
    icon: <Icons.Emoji className="text-[14px] text-gray-700" />,
  },
  {
    label: "Doc",
    icon: <Icons.DocIcon className="text-[14px] text-gray-700" />,
  },
  {
    label: "Form",
    icon: <Icons.DashboardTopIcon className="text-[14px] text-gray-700" />,
  },
  {
    label: "Whiteboard",
    icon: <Icons.WhiteboardIcon className="text-[14px] text-gray-700" />,
  },
  {
    label: "Folder",
    icon: <Icons.SignalIcon className="text-[14px] text-gray-700" />,
  },
  {
    label: "Sprint Folder",
    icon: <Icons.SignalIcon className="text-[14px] text-gray-700" />,
  },
  {
    label: "From template",
    icon: <Icons.TrophyIcon className="text-[14px] text-gray-700" />,
  },
  {
    label: "Import",
    icon: <Icons.StopWatchIcon className="text-[14px] text-gray-700" />,
  },
];

export default buttonsWorkSpaceModal;
