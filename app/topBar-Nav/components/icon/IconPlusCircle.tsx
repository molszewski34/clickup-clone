"use client";
import { FiPlusCircle } from "react-icons/fi";

export default function IconPlusCircle({
  size = "16",
  color = "white",
  ml = "1",
}) {
  return (
    <>
      <FiPlusCircle
        className={`w-[${size}px] h-[${size}px] text-${color} -ml-${ml}`}
      />
    </>
  );
}
