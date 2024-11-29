import { CiTrophy } from "react-icons/ci";

export default function IconsTrophy({
  color = "gray-700",
  size = "20",
}: {
  color?: string;
  size?: string;
}) {
  return (
    <>
      <CiTrophy
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`text-${color} `}
        strokeWidth="0.25"
      />
    </>
  );
}
