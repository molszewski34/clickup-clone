import { FaPlus } from "react-icons/fa6";

export default function IconPlus({
  color = "gray-700",
  size = "20",
}: {
  color?: string;
  size?: string;
}) {
  return (
    <>
      <FaPlus
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`text-${color} `}
        strokeWidth="0"
      />
    </>
  );
}
