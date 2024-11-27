import { HiMiniSignal } from "react-icons/hi2";

export default function IconSignal({
  color = "gray-700",
  size = "20",
}: {
  color?: string;
  size?: string;
}) {
  return (
    <>
      <HiMiniSignal
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`text-${color} `}
        strokeWidth="0"
      />
    </>
  );
}
