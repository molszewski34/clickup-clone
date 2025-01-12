import { Icons } from "@/icons/icons";

interface ButtonProps {
  label: string;
  icon: JSX.Element;
}

const Button = ({ label, icon }: ButtonProps) => (
  <button className="flex items-center h-8 w-full px-2 hover:bg-gray-100 rounded-md group">
    <div className="flex justify-center items-center w-4 h-4 mr-[10px]">
      {icon}
    </div>
    <div className="font-sans text-sm text-gray-400 group-hover:text-gray-600">
      {label}
    </div>
  </button>
);

export default function ButtonWriting() {
  const buttons: Array<{ label: string; iconKey: keyof typeof Icons }> = [
    { label: "Start writing", iconKey: "EmptyDocIcon" },
    { label: "Write with AI", iconKey: "AiIcon" },
    { label: "Table", iconKey: "TableIcon" },
    { label: "Column", iconKey: "ColumnIcon" },
  ];

  return (
    <div className="flex-row items-center w-auto mx-6 mb-4">
      {buttons.slice(0, 2).map(({ label, iconKey }, index) => {
        const IconComponent = Icons[iconKey];
        return (
          <Button
            key={index}
            label={label}
            icon={
              <IconComponent className="text-[16px] text-gray-400 group-hover:text-gray-600" />
            }
          />
        );
      })}

      <div className="pl-1 py-2 pr-3 text-[11px] font-sans text-gray-400 font-semibold cursor-default">
        Add new
      </div>

      {buttons.slice(2).map(({ label, iconKey }, index) => {
        const IconComponent = Icons[iconKey];
        return (
          <Button
            key={index + 2}
            label={label}
            icon={
              <IconComponent className="text-[16px] text-gray-400 group-hover:text-gray-600" />
            }
          />
        );
      })}
    </div>
  );
}
