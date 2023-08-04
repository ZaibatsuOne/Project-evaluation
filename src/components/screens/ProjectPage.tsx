import { FC } from "react";
import Container from "../Layout/Container";
import Header from "@/components/project/Header";
import Navigation from "@/components/project/Navigation";
import FlexColumn from "../Layout/Flex/FlexColumn";

const ProjectPage: FC = () => {
  return (
    <Container>
      <FlexColumn className="gap-10">
        <Header />
        <Navigation />
      </FlexColumn>
    </Container>
  );
};

export default ProjectPage;
