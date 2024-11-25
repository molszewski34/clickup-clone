import { GoMention } from "react-icons/go";

export default function IconMention({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <GoMention
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
