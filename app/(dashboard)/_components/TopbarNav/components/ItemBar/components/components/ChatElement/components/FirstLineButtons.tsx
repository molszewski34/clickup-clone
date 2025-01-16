import { Icons } from "@/icons/icons";
import UniversalButton from "../../../../../components/UniversalButton";

export default function FirstLineButtons() {
  return (
    <>
      <div className="flex items-center px-6 gap-2 mb-3">
        <UniversalButton
          IconComponent1={Icons.HomeIcon}
          text="Work Space"
          IconComponent2={Icons.ArrowDownIcon}
        />
      </div>
    </>
  );
}
