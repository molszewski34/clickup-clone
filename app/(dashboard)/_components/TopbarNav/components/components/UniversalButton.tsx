interface UniversalButtonProps {
  userInitial?: string;
  text: string;
  IconComponent1?: React.ComponentType<{ className: string }>;
  IconComponent2?: React.ComponentType<{ className: string }>;
  onClick?: () => void;
}

const UniversalButton = ({
  userInitial,
  text,
  IconComponent1,
  IconComponent2,
  onClick,
}: UniversalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] `}
    >
      {IconComponent1 ? (
        <IconComponent1 className="text-[12px] text-gray-500" />
      ) : (
        <div className="flex justify-center items-center w-4 h-4 bg-green-300 rounded-full text-white text-[10px] font-sans font-bold px-[5px] mr-1">
          {userInitial}
        </div>
      )}
      <div className="flex items-center text-xs font-sans font-medium text-gray-600">
        {text}
      </div>
      {IconComponent2 && (
        <IconComponent2 className="text-[12px] text-gray-500" />
      )}
    </button>
  );
};

export default UniversalButton;
