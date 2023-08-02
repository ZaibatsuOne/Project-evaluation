"use client";
import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import ProfiePageNav from "@/components/UI/sections/profile/ProfiePageNav";
import ProfilePageProjectList from "@/components/UI/sections/profile/ProfilePageProjectList";
import ProfilePageSettings from "@/components/UI/sections/profile/ProfilePageSettings";
import ProfilePageUser from "@/components/UI/sections/profile/ProfilePageUser";
import { FC, useState } from "react";

const page: FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <Container>
      <FlexColumn className="gap-6">
        <ProfiePageNav
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <div className="w-full h-[1px] bg-systemDarkGrey" />
        {currentSection === 0 ? (
          <ProfilePageProjectList />
        ) : currentSection === 1 ? (
          <ProfilePageUser />
        ) : (
          <ProfilePageSettings />
        )}
      </FlexColumn>
    </Container>
  );
};

export default page;
