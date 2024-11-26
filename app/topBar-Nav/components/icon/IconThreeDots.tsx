import { PiDotsThreeBold } from "react-icons/pi";

export default function IconThreeDots({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <PiDotsThreeBold
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
