import { IoCalendarClearOutline } from "react-icons/io5";

export default function IconCalendar({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <IoCalendarClearOutline
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
