import { IoPeopleOutline } from "react-icons/io5";

export default function IconPeople({
  size = "16",
  color = "white",
  classN = "",
}) {
  return (
    <>
      <IoPeopleOutline
        className={`w-[${size}px] h-[${size}px] text-${color} ${classN} -scale-x-100`}
      />
    </>
  );
}
