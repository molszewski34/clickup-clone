"use client";

import React from "react";
import IconHome from "../../../../topBar-Nav/components/icon/IconHome";
import IconInbox from "../../../../topBar-Nav/components/icon/IconInbox";
import IconDoc from "@/app/topBar-Nav/components/icon/IconDoc";
import IconDashboard from "@/app/topBar-Nav/components/icon/IconDashboard";
import IconWhiteboard from "@/app/topBar-Nav/components/icon/IconWhiteboard";
import IconSignal from "@/app/topBar-Nav/components/icon/IconSignal";
import IconsTrophy from "@/app/topBar-Nav/components/icon/IconsTrophy";
import IconStopWatch from "@/app/topBar-Nav/components/icon/IconStopWatch";

const buttons = [
  {
    label: "Home",
    icon: <IconHome size="18" color="gray-700" />,
    extraIcons: 0,
  },
  {
    label: "Inbox",
    icon: <IconInbox size="20" color="gray-700" />,
    extraIcons: 0,
  },
  {
    label: "Docs",
    icon: <IconDoc size="20" color="gray-700" />,
    extraIcons: 2,
  },
  {
    label: "Dashboards",
    icon: <IconDashboard size="20" color="gray-700" />,
    extraIcons: 2,
  },
  {
    label: "Whiteboards",
    icon: <IconWhiteboard size="20" color="gray-700" />,
    extraIcons: 2,
  },
  {
    label: "Pulse",
    icon: <IconSignal size="20" color="gray-700" />,
    extraIcons: 1,
  },
  {
    label: "Goals",
    icon: <IconsTrophy size="20" color="gray-700" />,
    extraIcons: 1,
  },
  {
    label: "Timesheets",
    icon: <IconStopWatch size="20" color="gray-700" />,
    extraIcons: 2,
  },
];

export default buttons;
