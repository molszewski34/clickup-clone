import { IoSearchOutline } from "react-icons/io5";

export default function IconSearch({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <IoSearchOutline
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
