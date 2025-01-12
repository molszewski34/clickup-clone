import { Icons } from "@/icons/icons";

type IconProps = {
  className?: string;
};

type ButtonProps = {
  icon?: React.ComponentType<IconProps>;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ icon: Icon, label }) => (
  <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
    {Icon && <Icon className="text-[16px] text-gray-500" />}
    <div className="flex items-center text-xs font-sans font-medium text-gray-600">
      {label}
    </div>
  </button>
);

export default function SecondLineButtons(): JSX.Element {
  const buttonData: Array<{
    iconKey?: keyof typeof Icons;
    label: string;
  }> = [
    { label: "TO DO" },
    { iconKey: "PeopleIcon", label: "Assignee" },
    { iconKey: "CalendarIcon", label: "Due date" },
    { iconKey: "FlagIcon", label: "Priority" },
    { iconKey: "TagIcon", label: "Tags" },
  ];

  return (
    <div className="flex items-center px-6 gap-2 mb-6">
      {buttonData.map(({ iconKey, label }, index) => {
        const Icon = iconKey ? Icons[iconKey] : undefined;
        return <Button key={index} icon={Icon} label={label} />;
      })}
    </div>
  );
}
