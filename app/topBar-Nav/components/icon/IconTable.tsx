import { LuTableProperties } from "react-icons/lu";

export default function IconTable({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <LuTableProperties
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN} -scale-x-100`}
      />
    </>
  );
}
