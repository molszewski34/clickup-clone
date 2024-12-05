import { HiOutlineChartSquareBar } from "react-icons/hi";

export default function IconDashboard({
  color = "gray-700",
  size = "20",
}: {
  color?: string;
  size?: string;
}) {
  return (
    <>
      <HiOutlineChartSquareBar
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`text-${color} `}
        strokeWidth="1.5"
      />
    </>
  );
}
