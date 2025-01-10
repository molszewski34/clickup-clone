"use client";

import { Icons } from "@/icons/icons";
import React from "react";

const buttonsWorkSpace = [
  {
    label: "Home",
    icon: <Icons.HomeIcon className="text-[18px] text-gray-700" />,
    extraIcons: 0,
  },
  {
    label: "Inbox",
    icon: <Icons.InboxIcon className="text-[20px] text-gray-700" />,
    extraIcons: 0,
  },
  {
    label: "Docs",
    icon: <Icons.DocIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
  },
  {
    label: "Dashboards",
    icon: <Icons.DashboardTopIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
  },
  {
    label: "Whiteboards",
    icon: <Icons.WhiteboardIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
  },
  {
    label: "Pulse",
    icon: <Icons.SignalIcon className="text-[20px] text-gray-700" />,
    extraIcons: 1,
  },
  {
    label: "Goals",
    icon: <Icons.TrophyIcon className="text-[20px] text-gray-700" />,
    extraIcons: 1,
  },
  {
    label: "Timesheets",
    icon: <Icons.StopWatchIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
  },
];

export default buttonsWorkSpace;
