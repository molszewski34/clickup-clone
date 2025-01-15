"use client";

import { Icons } from "@/icons/icons";
import React from "react";

const buttons = [
  {
    label: "Home",
    icon: <Icons.HomeIcon className="text-[18px] text-gray-700" />,
    extraIcons: 0,
    disabled: false,
  },
  {
    label: "Inbox",
    icon: <Icons.InboxIcon className="text-[20px] text-gray-700" />,
    extraIcons: 0,
    disabled: true,
  },
  {
    label: "Docs",
    icon: <Icons.DocIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
    disabled: true,
  },
  {
    label: "Dashboards",
    icon: <Icons.DashboardTopIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
    disabled: true,
  },
  {
    label: "Whiteboards",
    icon: <Icons.WhiteboardIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
    disabled: true,
  },
  {
    label: "Pulse",
    icon: <Icons.SignalIcon className="text-[20px] text-gray-700" />,
    extraIcons: 1,
    disabled: true,
  },
  {
    label: "Goals",
    icon: <Icons.TrophyIcon className="text-[20px] text-gray-700" />,
    extraIcons: 1,
    disabled: true,
  },
  {
    label: "Timesheets",
    icon: <Icons.StopWatchIcon className="text-[20px] text-gray-700" />,
    extraIcons: 2,
    disabled: true,
  },
];

export default buttons;
