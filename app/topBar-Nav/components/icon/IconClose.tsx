import { AiOutlineClose } from "react-icons/ai";

export default function IconClose({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <AiOutlineClose
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`fill-${color} stroke-${color} ${classN}`}
      />
    </>
  );
}
