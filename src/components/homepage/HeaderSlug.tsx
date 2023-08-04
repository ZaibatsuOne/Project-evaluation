import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import SectionSubtitle from "../UI/Section/SectionSubtitle";
import CreateProjectButton from "@/components/UI/Buttons/CreateProjectButton";

const HomePageHeader = () => {
  return (
    <Container>
      <FlexColumn className="gap-14 justify-center items-center text-center mx-auto">
        <h1 className="flex text-systemDarkGrey text-4xl xl:text-6xl w-full xl:w-1/2 font-black leading-8 xl:leading-[66px]">
          Управляйте своими проектами и сотрудничайте с командами
        </h1>
        <SectionSubtitle>
          Инструмент для визуализации, организации и оценки всей вашей работы.
        </SectionSubtitle>
        <CreateProjectButton />
      </FlexColumn>
    </Container>
  );
};

export default HomePageHeader;
