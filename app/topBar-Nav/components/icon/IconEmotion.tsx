import { MdOutlineEmojiEmotions } from "react-icons/md";

export default function IconEmotion({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <MdOutlineEmojiEmotions
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
