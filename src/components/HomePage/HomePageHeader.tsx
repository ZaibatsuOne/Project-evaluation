import SectionTitle from "../UI/SectionTitle";
import CreateProjectButton from "../UI/Buttons/CreateProjectButton";
import FlexColumn from "../Layout/Flex/FlexColumn";
import Container from "../Layout/Container";

const HomePageHeader = () => {
  return (
    <>
      <div className="absolute -top-[850px] -z-10 left-[21px] w-[901px] h-[720px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-full blur-[500px]" />
      <Container>
        <FlexColumn className="text-center">
          <SectionTitle className="w-1/2 mx-auto">
            Знание рисков - ключ к проектному{" "}
            <span className="text-blue-400">превосходству.</span>
          </SectionTitle>
          <CreateProjectButton />
        </FlexColumn>
      </Container>
    </>
  );
};

export default HomePageHeader;
