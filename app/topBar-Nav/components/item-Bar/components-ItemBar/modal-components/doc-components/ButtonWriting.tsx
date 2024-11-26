import IconAI from "@/app/topBar-Nav/components/icon/IconAI";
import IconColumn from "@/app/topBar-Nav/components/icon/IconColumn";
import IconEmptyDoc from "@/app/topBar-Nav/components/icon/IconEmptyDoc";
import IconTable from "@/app/topBar-Nav/components/icon/IconTable";

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
  // Button list without 'iconClass', as it is no longer used
  const buttons = [
    {
      label: "Start writing",
      icon: (
        <IconEmptyDoc
          size="16"
          color="gray-400"
          classN="group-hover:text-gray-600"
        />
      ),
    },
    {
      label: "Write with AI",
      icon: (
        <IconAI
          width="14"
          className="fill-[url(#custom-gradient)] opacity-50 group-hover:opacity-100"
        />
      ),
    },
    {
      label: "Table",
      icon: (
        <IconTable
          size="14"
          color="gray-400"
          classN="group-hover:text-gray-600"
        />
      ),
    },
    {
      label: "Column",
      icon: (
        <IconColumn
          size="14"
          color="gray-400"
          classN="group-hover:text-gray-600"
        />
      ),
    },
  ];

  return (
    <div className="flex-row items-center w-auto mx-6 mb-4">
      {/* First two buttons */}
      <Button {...buttons[0]} />
      <Button {...buttons[1]} />

      {/* "Add new" label */}
      <div className="pl-1 py-2 pr-3 text-[11px] font-sans text-gray-400 font-semibold cursor-default">
        Add new
      </div>

      {/* Remaining buttons */}
      {buttons.slice(2).map((button, index) => (
        <Button key={index} {...button} />
      ))}
    </div>
  );
}
