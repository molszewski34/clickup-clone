import IconComment from "@/app/topBar-Nav/components/icon/IconComment";
import IconEmotion from "@/app/topBar-Nav/components/icon/IconEmotion";
import IconMention from "@/app/topBar-Nav/components/icon/IconMention";
import IconMentionArrow from "@/app/topBar-Nav/components/icon/IconMentionArrow";
import IconSlashCircle from "@/app/topBar-Nav/components/icon/IconSlashCircle";

export default function LineButtonsAfterClick() {
  const buttons = [1, 2, 3, 4, 5]; // Array representing the buttons

  const icons = [
    { component: IconComment, props: { stroke: "gray-500", size: "14" } },
    { component: IconMention, props: { size: "14", color: "gray-500" } },
    { component: IconMentionArrow, props: { size: "14", color: "gray-500" } },
    { component: IconEmotion, props: { size: "14", color: "gray-500" } },
    { component: IconSlashCircle, props: { size: "14", color: "gray-500" } },
  ];

  return (
    <div className="flex justify-start gap-2 w-full p-4 pb-0">
      {buttons.map((_, index) => {
        const { component: SelectedIcon, props } = icons[index % icons.length];
        return (
          <button
            key={index}
            className="flex justify-center items-center hover:bg-gray-200 rounded-md h-8 w-8"
          >
            {/* Render the selected icon with its properties */}
            <SelectedIcon {...props} />
          </button>
        );
      })}
    </div>
  );
}
