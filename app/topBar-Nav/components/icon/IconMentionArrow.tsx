import { TbSquareArrowUp } from "react-icons/tb";

export default function IconMentionArrow({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <TbSquareArrowUp
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
