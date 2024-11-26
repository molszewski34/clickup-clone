import { PiMagicWandLight } from "react-icons/pi";

export default function IconMagicWand({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <PiMagicWandLight
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN} rotate-90 -scale-x-100`}
      />
    </>
  );
}
