import { FC } from "react";
import Container from "../Layout/Container";
import Header from "@/components/project/Header";
import Navigation from "@/components/project/Navigation";

const ProjectPage: FC = () => {
  return (
    <Container>
      <Header />
      <Navigation />
    </Container>
  );
};

export default ProjectPage;
