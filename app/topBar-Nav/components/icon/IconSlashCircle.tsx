import { LuCircleSlash } from "react-icons/lu";

export default function IconSlashCircle({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <LuCircleSlash
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
