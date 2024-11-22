import { PiTagBold } from "react-icons/pi";

export default function IconTag({ size = "16", color = "white", classN = "" }) {
  return (
    <>
      <PiTagBold
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
