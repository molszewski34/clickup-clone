import { BsThreeDots } from "react-icons/bs";

export default function IconThreeDots({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <BsThreeDots
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`text-${color} ${classN}`}
      />
    </>
  );
}
