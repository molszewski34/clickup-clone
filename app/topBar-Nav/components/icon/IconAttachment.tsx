import { RiAttachmentLine } from "react-icons/ri";

export default function IconAttachment({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <RiAttachmentLine
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN}`}
      />
    </>
  );
}
