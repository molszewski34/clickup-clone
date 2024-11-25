import { FiColumns } from "react-icons/fi";

export default function IconColumn({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <FiColumns
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
