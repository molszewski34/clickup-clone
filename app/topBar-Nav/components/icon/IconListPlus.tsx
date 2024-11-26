import { PiListPlus } from "react-icons/pi";

export default function IconListPlus({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <PiListPlus
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
