"use client";
import { HiOutlineChartSquareBar } from "react-icons/hi";

export default function IconDashboard({ size4 = 5, color = "gray-700" }) {
  return (
    <>
      <HiOutlineChartSquareBar
        className={`w-${size4} h-${size4} text-${color}`}
      />
    </>
  );
}
