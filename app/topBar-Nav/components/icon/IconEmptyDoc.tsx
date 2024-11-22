import { HiOutlineDocument } from "react-icons/hi";

export default function IconEmptyDoc({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <HiOutlineDocument
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
