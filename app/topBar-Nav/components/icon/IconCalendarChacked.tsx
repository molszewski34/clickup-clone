import { PiCalendarCheck } from "react-icons/pi";

export default function IconCalendarChacked({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <PiCalendarCheck
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
