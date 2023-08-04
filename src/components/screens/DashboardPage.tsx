"use client";
import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import ProfiePageNav from "@/components/profile/Navigation";
import ProfilePageProjectList from "@/components/profile/ProjectList";
import ProfilePageSettings from "@/components/profile/SettingSection";
import ProfilePageUser from "@/components/profile/UserSection";
import { useState } from "react";

const DashboardPage = () => {
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

export default DashboardPage;
