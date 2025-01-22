import { Icons } from "@/icons/icons";

export default function LineButtonsAfterClick() {
  const buttons = [1, 2, 3, 4, 5];

  const iconKeys = [
    { iconKey: "CommentIcon", className: "text-[14px] text-gray-500" },
    { iconKey: "MentionIcon", className: "text-[14px] text-gray-500" },
    { iconKey: "MentionArrowIcon", className: "text-[14px] text-gray-500" },
    { iconKey: "EmotionIcon", className: "text-[14px] text-gray-500" },
    { iconKey: "SlashCircleIcon", className: "text-[14px] text-gray-500" },
  ];

  return (
    <div className="flex justify-start gap-2 w-full p-4 pb-0">
      {buttons.map((_, index) => {
        const { iconKey, className } = iconKeys[index % iconKeys.length];
        const SelectedIcon = Icons[iconKey as keyof typeof Icons];

        return (
          <button
            key={index}
            className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8"
          >
            <SelectedIcon className={className} />
          </button>
        );
      })}
    </div>
  );
}
