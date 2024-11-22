import IconCalendar from "@/app/topBar-Nav/components/icon/IconCalendar";
import IconFlag from "@/app/topBar-Nav/components/icon/IconFlag";
import IconPeople from "@/app/topBar-Nav/components/icon/IconPeople";
import IconTag from "@/app/topBar-Nav/components/icon/IconTag";

type IconProps = {
  size: string;
  color: string;
  className?: string;
};

type ButtonProps = {
  icon?: React.ComponentType<IconProps>; // Typ dla komponentu ikony
  label: string; // Typ dla etykiety przycisku
};

const Button: React.FC<ButtonProps> = ({ icon: Icon, label }) => (
  <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
    {Icon && <Icon size="12" color="gray-500" />}
    <div className="flex items-center text-xs font-sans font-medium text-gray-600">
      {label}
    </div>
  </button>
);

export default function SecondLineButtons(): JSX.Element {
  return (
    <div className="flex items-center px-6 gap-2 mb-6">
      {/* TO DO Button */}
      <Button label="TO DO" />

      {/* Assignee Button */}
      <Button icon={IconPeople} label="Assignee" />

      {/* Due Date Button */}
      <Button icon={IconCalendar} label="Due date" />

      {/* Priority Button */}
      <Button icon={IconFlag} label="Priority" />

      {/* Tags Button */}
      <Button icon={IconTag} label="Tags" />
    </div>
  );
}
