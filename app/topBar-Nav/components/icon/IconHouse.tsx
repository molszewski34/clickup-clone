import { VscHome } from "react-icons/vsc";

export default function IconHouse({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <VscHome
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
