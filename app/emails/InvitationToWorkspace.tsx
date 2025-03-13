import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import { User, Workspace } from "../server-actions/types";

export default function InvitationToWorkspace({
  userFullName,

  name: workspaceName,
}: {
  userFullName: User;
  userEmail: User;
  name: Workspace;
}) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Heading className="text-black text-[24px] font-bold text-center p-0 my-[30px] mx-0">
            ClickUp-clone
          </Heading>
          <Container className="flex items-center border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Text className=" text-lg text-center">
              {`
              You have been invited by ${userFullName} to join workspace
              ${workspaceName}. Be aware it is not real ClickUp product
              and is made as portfolio project. When signing up use only this
              email address or you will be not add to ${workspaceName}`}
            </Text>
            <Text className="font-bold text-lg text-center">Have fun!</Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-violet-500 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={"https://clickup-clone-sable.vercel.app/signup"}
              >
                Accept Invite
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
