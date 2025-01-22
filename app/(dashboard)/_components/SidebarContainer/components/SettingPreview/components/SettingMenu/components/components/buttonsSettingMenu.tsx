"use client";

import { Icons } from "@/icons/icons";
import React from "react";

const buttonsSettingMenu = [
  {
    label: "Spaces",
    icon: <Icons.TbPlanet className="text-[14px]" />,
  },
  {
    label: "Imports / Exports",
    icon: <Icons.Logout className="text-[14px]" />,
  },
  {
    label: "App Center",
    icon: <Icons.AppsIcon className="text-[14px]" />,
  },
  {
    label: "Trash",
    icon: <Icons.Trash className="text-[14px]" />,
  },
  {
    label: "My Settings",
    icon: <Icons.PersonIcon className="text-[14px] " />,
  },
  {
    label: "Workspaces",
    icon: <Icons.BiBuildings className="text-[14px]" />,
  },
  {
    label: "Notifications",
    icon: <Icons.PiBell className="text-[14px] " />,
  },
  {
    label: "Apps",
    icon: <Icons.AppsIcon className="text-[14px] " />,
  },
  {
    label: "Cloud Storage",
    icon: <Icons.Cloud className="text-[14px]" />,
  },
  {
    label: "Calendar",
    icon: <Icons.CalendarIcon className="text-[14px]" />,
  },
  {
    label: "Referrals",
    icon: <Icons.PersonPlus className="text-[14px]" />,
  },
];

export default buttonsSettingMenu;
