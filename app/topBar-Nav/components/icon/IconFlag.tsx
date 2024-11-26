import { TbFlag3 } from "react-icons/tb";

export default function IconFlag({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <TbFlag3
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
