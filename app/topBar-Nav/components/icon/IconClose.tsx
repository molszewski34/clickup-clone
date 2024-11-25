import { AiOutlineClose } from "react-icons/ai";

export default function IconClose({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <AiOutlineClose
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
