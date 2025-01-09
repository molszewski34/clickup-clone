import RecentsContent from "./RecentsContent";
import AgendaContent from "./AgendaContent";
import MyWorkContent from "./MyWorkContent";
import AssignedContent from "./AssignedContent";
import PersonalListIMG from "../img/empty-my-list.svg";
import AssignedCommentsIMG from "../img/no-assigned.svg";
import LineUpIMG from "../img/empty-lineup.svg";
import { useUserProfile } from "@/hooks/useUserProfile";
import CardContainer from "./Components/CardContainer";
import EmptyCardContent from "./Components/EmptyCardContetnt";

export default function HomeContentV2() {
  const { userData } = useUserProfile();
  const userName = userData?.signUpFullName || "";
  const firstName = userName.split(" ")[0];
  return (
    <>
      <div className="mx-6 my-6">
        <h1 className="px-6 font-sans font-semibold text-2xl text-gray-950 ">
          Good evening, {firstName}
        </h1>
        <div className=" flex flex-col mt-4 mb-[14px] gap-4 ">
          <div className="grid grid-flow-col grid-cols-2  gap-4">
            <RecentsContent />
            <AgendaContent />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <MyWorkContent />
            <AssignedContent />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <CardContainer title="Personal List" NumberIcons={3} height="456px">
              <EmptyCardContent
                imageSrc={PersonalListIMG}
                description="Personal List is a home for your tasks."
                buttonText="Create a task"
                height="394px"
              />
            </CardContainer>
            <CardContainer
              title="Assigned comments"
              NumberIcons={2}
              height="456px"
            >
              <EmptyCardContent
                imageSrc={AssignedCommentsIMG}
                description="You don t have any assigned comments."
                height="394px"
              >
                <span className="flex font-sans text-base font-bold text-gray-900 mb-2">
                  No Comments
                </span>
              </EmptyCardContent>
            </CardContainer>
          </div>
          <div className="grid grid-flow-col grid-cols-1">
            <CardContainer title="LineUp" NumberIcons={2} height="318px">
              <EmptyCardContent
                imageSrc={LineUpIMG}
                description="LineUp keeps your most important tasks in one list. Add your most important task to get started."
                buttonText="Add task"
                height="280px"
              />
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
}
