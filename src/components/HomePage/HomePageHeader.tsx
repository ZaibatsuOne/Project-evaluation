import Container from "../Layout/Container";
import FlexColumn from "../Layout/Flex/FlexColumn";
import CreateProjectButton from "../UI/Buttons/CreateProjectButton";
import SectionSubtitle from "../UI/Section/SectionSubtitle";

const HomePageHeader = () => {
  return (
    <Container>
      <section className="text-center px-60">
        <FlexColumn className="gap-14">
          <h1 className="flex text-systemDarkGrey text-[58px] font-black leading-[66px]">
            Управляйте своими проектами и сотрудничайте с командами
          </h1>
          <SectionSubtitle>
            Инструмент для визуализации, организации и оценки всей вашей работы.
          </SectionSubtitle>
          <CreateProjectButton />
        </FlexColumn>
      </section>
    </Container>
  );
};

export default HomePageHeader;
